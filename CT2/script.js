function goHome() {
    window.location.href = "index.html";
}
// script.js - simple native js

document.addEventListener('DOMContentLoaded', function () {
    const thumbnails = document.querySelectorAll('.thumb');
    const mainMedia = document.getElementById('main-media');
    const mediaDescription = document.getElementById('media-description-text');
    const playButton = document.querySelector('.play-button');

    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function () {
            const isVideo = this.hasAttribute('data-video');

            mainMedia.innerHTML = ''; // 清空

            if (isVideo) {
                const video = document.createElement('video');
                video.src = this.getAttribute('data-video');
                video.controls = true;
                video.autoplay = true;
                video.muted = false;
                video.style.width = '100%';
                video.style.borderRadius = '5px';
                mainMedia.appendChild(video);
            } else {
                const img = document.createElement('img');
                img.src = this.src;
                img.alt = 'Main Media';
                img.id = 'current-image';
                img.style.width = '100%';
                img.style.borderRadius = '5px';
                mainMedia.appendChild(img);
            }

            // 切换高亮
            thumbnails.forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            // 更新描述
            mediaDescription.textContent = this.title;
        });
    });

    // Play按钮
    playButton.addEventListener('click', function () {
        alert('Launching Circuit Defender... 🚀');
    });
});
window.onload = function() {
    const mainVideo = document.getElementById('current-video');
    mainVideo.load();
    mainVideo.play();
};