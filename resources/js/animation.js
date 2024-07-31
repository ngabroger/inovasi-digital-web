


const paths = document.querySelectorAll('#stairs path');
gsap.timeline()
    .from(paths, {
        duration: .1,
        stagger: 0.009, // Animasi berurutan
        scale: 0, // Mulai dari skala 0 (tak terlihat)
        transformOrigin: "center", // Transformasi dari tengah elemen
        opacity: 0, // Mulai dari opasitas 0
        ease: "bounce" // Efek bouncing
    });