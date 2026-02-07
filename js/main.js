const targetDate = new Date("Jul 24, 2026 23:59:59").getTime();

const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;

    if (distance < 0) {
        clearInterval(timer);
        document.querySelector(".countdown").innerHTML = "Время вышло!";
    }
}, 1000);

document.addEventListener("DOMContentLoaded", function() {
    const animItems = document.querySelectorAll('.anim-item');

    if (animItems.length === 0) return;

    const options = {
        root: null,
        rootMargin: '0px', 
        threshold: 0.2 
    };

    const observerCallback = function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, options);

    animItems.forEach(item => {
        observer.observe(item);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("contactModal");
    const btn = document.getElementById("openModal");
    const span = document.querySelector(".close-modal");

    if (btn && modal) {
        btn.addEventListener("click", function(e) {
            e.preventDefault();
            console.log("Кнопка нажата!");
            modal.style.display = "block";
            document.body.style.overflow = "hidden";
        });
    }

    if (span) {
        span.onclick = function() {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    }

    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });
});