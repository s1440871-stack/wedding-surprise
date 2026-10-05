function showSurprise() {

    const surprise = document.getElementById("surprise");

    surprise.classList.remove("hidden");

    // Scroll smoothly to the surprise
    surprise.scrollIntoView({
        behavior: "smooth"
    });

    // Create floating hearts
    createHearts();
}


function createHearts() {

    for (let i = 0; i < 25; i++) {

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "100vh";
        heart.style.fontSize = (15 + Math.random() * 25) + "px";
        heart.style.zIndex = "9999";
        heart.style.pointerEvents = "none";

        document.body.appendChild(heart);

        const duration = 3 + Math.random() * 3;

        heart.animate(
            [
                {
                    transform: "translateY(0)",
                    opacity: 1
                },
                {
                    transform: `translateY(-${window.innerHeight + 200}px)`,
                    opacity: 0
                }
            ],
            {
                duration: duration * 1000,
                easing: "ease-out"
            }
        );

        setTimeout(() => {
            heart.remove();
        }, duration * 1000);
    }
}
