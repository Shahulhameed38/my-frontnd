const loginForm = document.getElementById('loginForm');
const dashboard = document.getElementById('dashboard');
const cameraFeed = document.getElementById('cameraFeed');
const screenShareFeed = document.getElementById('screenShareFeed');
const deviceList = document.getElementById('deviceList');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Simulate successful login
    document.getElementById('login').style.display = 'none';
    dashboard.style.display = 'block';

    // Load devices and start streams
    loadDevices();
    startCameraFeed();
    startScreenShare();
});

function loadDevices() {
    // Simulate connected devices
    const devices = ['Device 1', 'Device 2'];
    devices.forEach(device => {
        const li = document.createElement('li');
        li.textContent = device;
        deviceList.appendChild(li);
    });
}

function startCameraFeed() {
    cameraFeed.src = 'http://localhost:5000/camera-feed'; // Backend endpoint for camera feed
}

function startScreenShare() {
    screenShareFeed.src = 'http://localhost:5000/screen-share'; // Backend endpoint for screen sharing
}
