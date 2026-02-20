let camera, scene, renderer, controls;

const objects = [];
let raycaster;

let moveForward = false;
let moveBackward = false;
let moveLeft = false;
let moveRight = false;
let canJump = false;

let prevTime = performance.now();
const velocity = new THREE.Vector3();
const direction = new THREE.Vector3();

// Serginin yüklendiğinden emin olmak için LoadingManager kullanıyoruz
const loadingManager = new THREE.LoadingManager();
const instructions = document.getElementById('instructions');

loadingManager.onProgress = function (url, itemsLoaded, itemsTotal) {
    instructions.innerHTML = `<span style="font-size:36px; font-weight:bold; margin-bottom: 20px; display:inline-block">Sergi Yükleniyor...</span><br/>%${Math.round((itemsLoaded / itemsTotal) * 100)}`;
};

loadingManager.onLoad = function () {
    instructions.innerHTML = `
        <span style="font-size:36px; font-weight:bold; margin-bottom: 20px; display:inline-block">Sergiye Başlamak İçin Tıklayın</span>
        <br />
        Hareket: <span class="key">W</span> <span class="key">A</span> <span class="key">S</span> <span class="key">D</span><br/>
        Fare: Etrafa Bak<br/>
        Çıkış: <span class="key">ESC</span>
    `;
};

loadingManager.onError = function (url) {
    instructions.innerHTML = `<span style="font-size:36px; font-weight:bold; color:red;">Model Yüklenirken Hata Oluştu!</span>`;
    console.error('There was an error loading ' + url);
};

init();
animate();

function init() {
    // Fotoğraf Makinesi (Camera) Ayarları
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.y = 1.7; // İnsan göz hizası civarında

    // Sahne (Scene)
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f0f0);
    scene.fog = new THREE.Fog(0xf0f0f0, 10, 500);

    // Işıklandırma
    const light = new THREE.HemisphereLight(0xffffff, 0x444444, 0.6);
    light.position.set(0, 200, 0);
    scene.add(light);

    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight.position.set(100, 200, 50);
    dirLight.castShadow = true;
    dirLight.shadow.camera.top = 180;
    dirLight.shadow.camera.bottom = - 100;
    dirLight.shadow.camera.left = - 120;
    dirLight.shadow.camera.right = 120;
    scene.add(dirLight);

    // Kontroller (PointerLock - FPS görünümü)
    controls = new THREE.PointerLockControls(camera, document.body);

    const blocker = document.getElementById('blocker');

    instructions.addEventListener('click', function () {
        if (instructions.innerText.includes("Başlamak İçin Tıklayın")) {
            controls.lock();
        }
    });

    controls.addEventListener('lock', function () {
        instructions.style.display = 'none';
        blocker.style.display = 'none';
    });

    controls.addEventListener('unlock', function () {
        blocker.style.display = 'flex';
        instructions.style.display = '';
    });

    scene.add(controls.getObject());

    // Tuş Kontrolleri
    const onKeyDown = function (event) {
        switch (event.code) {
            case 'ArrowUp':
            case 'KeyW':
                moveForward = true;
                break;
            case 'ArrowLeft':
            case 'KeyA':
                moveLeft = true;
                break;
            case 'ArrowDown':
            case 'KeyS':
                moveBackward = true;
                break;
            case 'ArrowRight':
            case 'KeyD':
                moveRight = true;
                break;
            case 'Space':
                if (canJump === true) velocity.y += 350;
                canJump = false;
                break;
        }
    };

    const onKeyUp = function (event) {
        switch (event.code) {
            case 'ArrowUp':
            case 'KeyW':
                moveForward = false;
                break;
            case 'ArrowLeft':
            case 'KeyA':
                moveLeft = false;
                break;
            case 'ArrowDown':
            case 'KeyS':
                moveBackward = false;
                break;
            case 'ArrowRight':
            case 'KeyD':
                moveRight = false;
                break;
        }
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyUp);

    raycaster = new THREE.Raycaster(new THREE.Vector3(), new THREE.Vector3(0, - 1, 0), 0, 10);

    // GLTF - Sergi modelinin yüklenmesi
    const loader = new THREE.GLTFLoader(loadingManager);
    loader.load('assets/sergi.glb', function (gltf) {
        
        // Zemin ve duvarları collide edebilmek için push object
        gltf.scene.traverse(function (child) {
            if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;
                objects.push(child);
            }
        });

        // Modeli merkezle veya boyutlandır
        // const box = new THREE.Box3().setFromObject(gltf.scene);
        // ...gerekirse boyutlandırma işlemleri

        scene.add(gltf.scene);

    });

    // Renderer (Hızlandırıcı/Çizici)
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputEncoding = THREE.sRGBEncoding;

    document.body.appendChild(renderer.domElement);
    window.addEventListener('resize', onWindowResize);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);

    const time = performance.now();

    if (controls.isLocked === true) {

        raycaster.ray.origin.copy(controls.getObject().position);
        raycaster.ray.origin.y -= 10;

        const intersections = raycaster.intersectObjects(objects, false);
        const onObject = intersections.length > 0;

        const delta = (time - prevTime) / 1000;

        velocity.x -= velocity.x * 10.0 * delta;
        velocity.z -= velocity.z * 10.0 * delta;
        velocity.y -= 9.8 * 100.0 * delta; // Yerçekimi kütlesi

        direction.z = Number(moveForward) - Number(moveBackward);
        direction.x = Number(moveRight) - Number(moveLeft);
        direction.normalize(); // her yönde eşit hız için

        const speed = 150.0;

        if (moveForward || moveBackward) velocity.z -= direction.z * speed * delta;
        if (moveLeft || moveRight) velocity.x -= direction.x * speed * delta;

        if (onObject === true) {
            velocity.y = Math.max(0, velocity.y);
            canJump = true;
        }

        controls.moveRight(- velocity.x * delta);
        controls.moveForward(- velocity.z * delta);

        controls.getObject().position.y += (velocity.y * delta); // Yeni davranış

        if (controls.getObject().position.y < 1.7) {
            velocity.y = 0;
            controls.getObject().position.y = 1.7; // Kamera yüksekliği
            canJump = true;
        }

    }

    prevTime = time;
    renderer.render(scene, camera);
}
