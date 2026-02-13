const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'games', 'harfi_yazalim', 'index.html');
if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    process.exit(1);
}

let content = fs.readFileSync(filePath, 'utf8');

// 1. Add `letterZones` global object
if (!content.includes('var letterZones =')) {
    content = content.replace(
        /var currentMaskData = null;/,
        'var currentMaskData = null;\n        var letterZones = { E: null, e: null };'
    );
}

// 2. Update `drawScene` to populate `letterZones`
const captureZoneLogic = `
            // Capture Zones for Animation
            letterZones.E = { x: xBig, y: yBig, w: wBig, h: hBig };
            letterZones.e = { x: xSmall, y: ySmall, w: wSmall, h: hSmall };
`;

if (!content.includes('letterZones.E = { x: xBig')) {
    content = content.replace(
        /mctx\.restore\(\);/,
        captureZoneLogic + '\n            mctx.restore();'
    );
}

// 3. Update `startOverlayGame` to call `playWritingAnimation()`
// Avoid double replacement if I ran previous script partially? No, previous failed.
content = content.replace(
    /stopInstruction\(\);\s*}/,
    'stopInstruction();\n            playWritingAnimation();\n        }'
);

// 4. Implement `playWritingAnimation` and helpers
// I will place this after `checkGameResult` function end `}`.
// But first ensure I don't break existing script.

const animationLogic = `
        // --- Writing Animation Logic ---
        function playWritingAnimation() {
            if (!letterZones.E || !letterZones.e) return;

            clearCanvas();
            
            // disable canvas interaction while animating
            var oldVal = isDrawing;
            // Actually we don't control mouse events directly from here except isDrawing flag.
            
            // --- Stroke Data (Relative 0..1) ---
            const strokesE = [
                { start: {x: 0.15, y: 0.05}, end: {x: 0.15, y: 0.95} }, // 1. Down
                { start: {x: 0.15, y: 0.05}, end: {x: 0.85, y: 0.05} }, // 2. Top
                { start: {x: 0.15, y: 0.5},  end: {x: 0.75, y: 0.5} },  // 3. Mid
                { start: {x: 0.15, y: 0.95}, end: {x: 0.85, y: 0.95} }  // 4. Bot
            ];

            runSequence([
                () => animateLetter('E', strokesE, 0),
                () => animateLetter('e', 'curve', 0)
            ]);
        }

        async function runSequence(tasks) {
            for (let task of tasks) {
                await task();
            }
            setTimeout(() => {
               fadeOutDrawing();
            }, 1000);
        }

        function fadeOutDrawing() {
            let op = 1;
            let timer = setInterval(() => {
                if (op <= 0.1) {
                    clearInterval(timer);
                    clearCanvas();
                    dctx.globalAlpha = 1; 
                }
                clearCanvas();
                clearInterval(timer); 
            }, 1500);
        }

        function animateLetter(char, strokes, delay) {
            return new Promise(resolve => {
                let box = (char === 'E') ? letterZones.E : letterZones.e;
                let ctx = dctx; 
                
                ctx.save();
                ctx.strokeStyle = 'rgba(255, 0, 0, 0.5)'; 
                ctx.lineWidth = 15;
                ctx.lineCap = 'round';
                ctx.lineJoin = 'round';

                if (char === 'E') {
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
                    let s1_start = { x: box.x + 0.1 * box.w, y: box.y + 0.55 * box.h };
                    let s1_end   = { x: box.x + 0.9 * box.w, y: box.y + 0.55 * box.h };
                    
                    animateLine(ctx, s1_start, s1_end, 500, () => {
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

        /* 
           Using a simpler animateCurve logic to avoid the variable hoisting issues
           encountered in previous script attempt.
        */
        
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
             let start = null;
             
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
                let progress = (timestamp - start) / duration; 
                if (progress > 1) progress = 1;
                
                let curDist = progress * totalDist;
                
                let pt = getPointAtDist(points, dists, curDist);
                
                // Using global/window to persist state across frames for this simplified one-off demo
                if (window.lastCurveParams && window.lastCurveParams.t < progress) {
                     ctx.beginPath();
                     ctx.moveTo(window.lastCurveParams.x, window.lastCurveParams.y);
                     ctx.lineTo(pt.x, pt.y);
                     ctx.stroke();
                } else if(!window.lastCurveParams) {
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

// Insert the Animation Logic 
// Use a unique marker - `        function checkGameResult() {` ends with `}` around line 646.
// I will append it before `</script>` tag that is followed by `<!-- Combined Navigation Logic -->`
content = content.replace(
    /    <\/script>\s*<!-- Combined Navigation Logic -->/,
    animationLogic + '\n    </script>\n    <!-- Combined Navigation Logic -->'
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Added letter writing animation to harfi_yazalim.');
