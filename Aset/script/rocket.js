
const rocket = document.querySelector('.rocket-wrapper');

function launchRocket() {

    const side = Math.floor(Math.random() * 3);

    let startX, startY, endX, endY;

    if (side === 0) {
        // Dari kiri
        startX = -150;
        startY = Math.random() * window.innerHeight;
        endX = window.innerWidth + 150;
        endY = Math.random() * window.innerHeight * 0.6;
    } 
    else if (side === 1) {
        // Dari kanan
        startX = window.innerWidth + 150;
        startY = Math.random() * window.innerHeight;
        endX = -150;
        endY = Math.random() * window.innerHeight * 0.6;
    } 
    else {
        // Dari bawah
        startX = Math.random() * window.innerWidth;
        startY = window.innerHeight + 150;
        endX = Math.random() * window.innerWidth;
        endY = -150;
    }

    // 🔥 Hitung jarak
    const deltaX = endX - startX;
    const deltaY = endY - startY;

    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    // 🎯 Speed stabil (pixel per detik)
    const speed = 300; 
    const duration = distance / speed;

    // 🔥 Hitung sudut arah
    let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

    // Koreksi jika SVG default menghadap ke atas
    angle += 90;

    // Reset posisi dulu tanpa animasi
    rocket.style.transition = "none";
    rocket.style.left = startX + "px";
    rocket.style.top = startY + "px";
    rocket.style.transform = `rotate(${angle}deg)`;

    // Paksa reflow supaya browser baca perubahan
    rocket.offsetHeight;

    // Jalankan animasi
    rocket.style.transition = `all ${duration}s linear`;
    rocket.style.left = endX + "px";
    rocket.style.top = endY + "px";

    // Launch ulang setelah selesai
    setTimeout(launchRocket, duration * 1000);
}

// Mulai pertama kali
launchRocket();