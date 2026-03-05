// untuk backgroun bintang kelap kelip
const starContainer = document.querySelector(".stars");
const numberOfStars = 200; // bisa ubah jumlahnya

for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement("div");
    star.classList.add("star");

    const size = Math.random() * 3; // ukuran random
    star.style.width = size + "px";
    star.style.height = size + "px";

    star.style.top = Math.random() * window.innerHeight + "px";
    star.style.left = Math.random() * window.innerWidth + "px";

    star.style.animationDuration = (Math.random() * 3 + 1) + "s";

    starContainer.appendChild(star);
}

// untuk bintang jatuh
function createShootingStar() {

    const star = document.createElement("div");
    star.classList.add("shooting-star");

    // posisi awal random di atas layar
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * 150;

    star.style.left = startX + "px";
    star.style.top = startY + "px";

    document.body.appendChild(star);

    // arah random kiri atau kanan
    const direction = Math.random() > 0.5 ? 1 : -1;

    const dx = (Math.random() * 400 + 200) * direction;
    const dy = Math.random() * 400 + 300;

    // panjang gerakan
    const distance = Math.sqrt(dx * dx + dy * dy);

    // sudut arah gerakan
    const angle = Math.atan2(dy, dx) * 180 / Math.PI;

    // rotate dulu
    star.style.transform = `rotate(${angle}deg)`;
    star.style.transition = "transform 5s linear, opacity 3s";

    star.style.opacity = "1";

    setTimeout(() => {
        // setelah rotate, gerakkan lurus ke depan
        star.style.transform =
            `rotate(${angle}deg) translateX(${distance}px)`;
        star.style.opacity = "0";
    }, 10);

    setTimeout(() => {
        star.remove();
    }, 5000 );
}

// jarak antara bintang jatuh
function randomShootingStar() {
    createShootingStar();
    setTimeout(randomShootingStar, Math.random() * 2000 + 800);
}

randomShootingStar();       