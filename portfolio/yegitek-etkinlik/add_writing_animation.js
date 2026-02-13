const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'games', 'harfi_yazalim', 'index.html');
if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    process.exit(1);
}

let content = fs.readFileSync(filePath, 'utf8');

// 1. Add `letterZones` global object
content = content.replace(
    /var currentMaskData = null;/,
    'var currentMaskData = null;\n        var letterZones = { E: null, e: null };'
);

// 2. Update `drawScene` to populate `letterZones`
const captureZoneLogic = `
            // Capture Zones for Animation
            letterZones.E = { x: xBig, y: yBig, w: wBig, h: hBig };
            letterZones.e = { x: xSmall, y: ySmall, w: wSmall, h: hSmall };
`;

// Insert before `mctx.restore();` (at line 522 in previous view)
content = content.replace(
    /mctx\.restore\(\);/,
    captureZoneLogic + '\n            mctx.restore();'
);

// 3. Update `startOverlayGame` to call `playWritingAnimation()`
content = content.replace(
    /stopInstruction\(\);/,
    'stopInstruction();\n            playWritingAnimation();'
);

// 4. Implement `playWritingAnimation` and helpers
const animationLogic = `
        // --- Writing Animation Logic ---
        function playWritingAnimation() {
            if (!letterZones.E || !letterZones.e) return;

            // Clear any existing drawing first? Optional.
            clearCanvas();
            // Disable interaction during animation?
            var overlay = document.querySelector('.custom-modal-overlay');

            // --- Stroke Data (Relative 0..1) ---
            // 'E': 1. Vertical Down, 2. Top Right, 3. Mid Right, 4. Bot Right
            const strokesE = [
                // 1. Left Vertical Down
                { start: {x: 0.15, y: 0.05}, end: {x: 0.15, y: 0.95} },
                // 2. Top Horizontal
                { start: {x: 0.15, y: 0.05}, end: {x: 0.85, y: 0.05} },
                // 3. Mid Horizontal
                { start: {x: 0.15, y: 0.5},  end: {x: 0.75, y: 0.5} },
                // 4. Bot Horizontal
                { start: {x: 0.15, y: 0.95}, end: {x: 0.85, y: 0.95} }
            ];

            // 'e': 1. Mid bar, 2. Arc up-left-down-right
            // Simulating curve with points
            const stroke_e_1 = [
                {x: 0.1, y: 0.55}, {x: 0.9, y: 0.55} // Horizontal bar
            ];
            const stroke_e_2 = [
                {x: 0.9, y: 0.55}, // Start from end of bar
                {x: 0.9, y: 0.4}, {x: 0.5, y: 0.05}, {x: 0.1, y: 0.4}, // Loop top
                {x: 0.1, y: 0.7}, {x: 0.5, y: 0.95}, {x: 0.9, y: 0.85} // Loop bottom
            ];
            
            // Queue animations
            // We want to draw on 'drawing-canvas' but temporarily. 
            // Or strictly speaking, user might want to trace over it.
            // Let's draw with a specific DEMO color that fades?
            // "how it is drawn" -> Usually a hand icon moving.

            runSequence([
                () => animateLetter('E', strokesE, 0),
                () => animateLetter('e', 'curve', 0) // Special handler for e
            ]);
        }

        async function runSequence(tasks) {
            // Lock UI?
            for (let task of tasks) {
                await task();
            }
            // Cleanup or auto-clear after delay? 
            // User might want to see the result for a second.
            setTimeout(() => {
               // clearCanvas(); // Optional: Clear after demo so user can write.
               // For now, let's leave it or fade it.
               fadeOutDrawing();
            }, 1000);
        }

        function fadeOutDrawing() {
            let op = 1;
            let timer = setInterval(() => {
                if (op <= 0.1) {
                    clearInterval(timer);
                    clearCanvas();
                    dctx.globalAlpha = 1; // Reset
                }
                // We can't easily fade canvas context content without clearing/redrawing or using CSS.
                // CSS on canvas affects ISOLATED opacity.
                // Let's just clearRect.
                clearCanvas();
                clearInterval(timer); // Instant clear for now to be safe.
            }, 1500);
        }

        function animateLetter(char, strokes, delay) {
            return new Promise(resolve => {
                let box = (char === 'E') ? letterZones.E : letterZones.e;
                let ctx = dctx; // Use drawing canvas
                
                ctx.save();
                ctx.strokeStyle = 'rgba(255, 0, 0, 0.5)'; // Demo color (Red transparent)
                ctx.lineWidth = 15;
                ctx.lineCap = 'round';
                ctx.lineJoin = 'round';

                if (char === 'E') {
                    // Linear Strokes
                    let sIndex = 0;
                    function playNextStroke() {
                        if (sIndex >= strokes.length) {
                            ctx.restore();
                            resolve();
                            return;
                        }
                        let s = strokes[sIndex];
                        let p1 = { x: box.x + s.start.x * box.w, y: box.y + s.start.y * box.h };
                        let p2 = { x: box.x + s.end.x * box.w,   y: box.y + s.end.y * box.h   };
                        
                        animateLine(ctx, p1, p2, 600, () => {
                            sIndex++;
                            playNextStroke();
                        });
                    }
                    playNextStroke();
                } else {
                    // 'e' Curve Logic
                    // 1. Horizontal
                    let s1_start = { x: box.x + 0.1 * box.w, y: box.y + 0.55 * box.h };
                    let s1_end   = { x: box.x + 0.9 * box.w, y: box.y + 0.55 * box.h };
                    
                    animateLine(ctx, s1_start, s1_end, 500, () => {
                        // 2. Curve
                        // Bezier approximation or multi-line segment?
                        // Let's use simple curve points logic
                        let points = [
                             {x: 0.9, y: 0.55},
                             {x: 0.9, y: 0.25}, {x: 0.5, y: 0.05}, {x: 0.1, y: 0.25}, // Top arc
                             {x: 0.1, y: 0.75}, {x: 0.5, y: 0.95}, {x: 0.9, y: 0.85}  // Bot arc
                        ].map(p => ({ x: box.x + p.x * box.w, y: box.y + p.y * box.h }));

                        animateCurve(ctx, points, 1200, () => {
                            ctx.restore();
                            resolve();
                        });
                    });
                }
            });
        }

        function animateLine(ctx, p1, p2, duration, callback) {
            let start = null;
            function loop(timestamp) {
                if (!start) start = timestamp;
                let progress = (timestamp - start) / duration;
                if (progress > 1) progress = 1;

                let curX = p1.x + (p2.x - p1.x) * progress;
                let curY = p1.y + (p2.y - p1.y) * progress;

                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(curX, curY);
                ctx.stroke();

                if (progress < 1) {
                    requestAnimationFrame(loop);
                } else {
                    if (callback) callback();
                }
            }
            requestAnimationFrame(loop);
        }

        function animateCurve(ctx, points, duration, callback) {
             // Simplification: Animate drawing lines between points smoothly?
             // Or use quadraticCurveTo physics?
             // Let's simply interpolate index.
             let start = null;
             // Total distance approx?
             // Let's just walk through t=0..1 on a Catmull-Rom or simpler Polyline.
             // Polyline is easiest.
             
             // Pre-calculate segments
             let totalDist = 0;
             let dists = [0];
             for(let i=0; i<points.length-1; i++) {
                 let d = Math.hypot(points[i+1].x - points[i].x, points[i+1].y - points[i].y);
                 totalDist += d;
                 dists.push(totalDist);
             }

             function loop(timestamp) {
                if (!start) start = timestamp;
                let progress = (timestamp - start) / duration; // 0..1
                if (progress > 1) progress = 1;
                
                let curDist = progress * totalDist;
                
                // Find segment
                // We redraw everything from start to current point to ensure smoothness/no gaps if clearing (we aren't clearing).
                // But efficient way: Just draw tip? No, we need path.
                // Since canvas preserves previous frame, we just draw small segment from prevFramePos to currFramePos.
                // But `animateLine` logic assumes static p1.
                
                // Better: Draw persistent path. 
                // We need to determine (x,y) at 'curDist'.
                let pt = getPointAtDist(points, dists, curDist);
                
                if (window.lastCurveParams && window.lastCurveParams.t < progress) {
                     ctx.beginPath();
                     ctx.moveTo(window.lastCurveParams.x, window.lastCurveParams.y);
                     ctx.lineTo(pt.x, pt.y);
                     ctx.stroke();
                } else if(!window.lastCurveParams) {
                    // First frame
                     window.lastCurveParams = {x: points[0].x, y: points[0].y, t: 0};
                }
                window.lastCurveParams = {x: pt.x, y: pt.y, t: progress};

                if (progress < 1) {
                    requestAnimationFrame(loop);
                } else {
                    window.lastCurveParams = null;
                    if (callback) callback();
                }
             }
             requestAnimationFrame(loop);
        }
        
        function getPointAtDist(points, dists, d) {
            // Find index i where dists[i] <= d < dists[i+1]
            for(let i=0; i<dists.length-1; i++) {
                if(d >= dists[i] && d <= dists[i+1]) {
                     let localT = (d - dists[i]) / (dists[i+1] - dists[i]);
                     let px = points[i].x + (points[i+1].x - points[i].x) * localT;
                     let py = points[i].y + (points[i+1].y - points[i].y) * localT;
                     return {x: px, y: py};
                }
            }
            return points[points.length-1];
        }
`;

// Insert the Animation Logic at the end of the script, before `</script>`
content = content.replace(
    /    <\/script>\s*<!-- Combined Navigation Logic -->/,
    animationLogic + '\n    </script>\n    <!-- Combined Navigation Logic -->'
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Added letter writing animation to harfi_yazalim.');
