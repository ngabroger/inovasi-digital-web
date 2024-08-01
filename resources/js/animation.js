


const paths = document.querySelectorAll('#stairs path');
gsap.timeline()
    .from(paths, {
        duration: .1,
        stagger: 0.0010, // Animasi berurutan
        scale: 0, // Mulai dari skala 0 (tak terlihat)
        transformOrigin: "center", // Transformasi dari tengah elemen
        opacity: 0, // Mulai dari opasitas 0
        ease: "bounce" // Efek bouncing
    });

const robocop = document.getElementById('robocop');
   
var tl= gsap.timeline();
tl.from(robocop,{
    opacity:0,
    duration: 2
}).to(robocop, {
    opacity: 1,
    duration: 2
});


tl.to(robocop,{
    scrollTrigger: {
        trigger: robocop,
        start: '50 50%', // Mulai animasi ketika elemen `robocop` berada di 50% dari viewport
        end: '50 30%', // Akhiri animasi ketika elemen `robocop` mencapai bagian bawah halaman
        scrub: 2, // Animasi mengikuti scroll
        markers: false, // Menampilkan penanda start dan end
    },
    duration: 5,
    rotation: -50,
    y: -500, 
    x: -500, // Bergerak ke kiri
    // Rotasi elemen
});
  
const ai = document.querySelectorAll('#ai path');
 var tl2= gsap.timeline();
tl2.from(ai,{
    duration: .1,
    stagger: 0.009, // Animasi berurutan
    scale: 0, // Mulai dari skala 0 (tak terlihat)
    transformOrigin: "center", // Transformasi dari tengah elemen
    opacity: 0, // Mulai dari opasitas 0
    ease: "bounce" // Efek bouncing
})



const section3 = document.querySelectorAll('#stairs3 path');
var tl3 =gsap.timeline();
tl3.from(section3,{
    scrollTrigger: {
        trigger: section3,
        start: '-500 center', // Mulai animasi ketika elemen `section3` berada di 50% dari viewport
        end: '-500 center', // Akhiri animasi ketika elemen `section3` mencapai bagian bawah halaman
        scrub: 5, // Animasi mengikuti scroll
        markers: false
    },
    duration: .1,
    stagger: 0.0010, // Animasi berurutan
    scale: 0, // Mulai dari skala 0 (tak terlihat)
    transformOrigin: "center", // Transformasi dari tengah elemen
    opacity: 0, // Mulai dari opasitas 0
    ease: "bounce" 
});
    
const section4 = document.querySelectorAll('#stairs4 path');
var tl4 =gsap.timeline();
tl4.from(section4,{
    scrollTrigger: {
        trigger: section3,
        start: 'top center', // Mulai animasi ketika elemen `section3` berada di 50% dari viewport
        end: 'bottom center', // Akhiri animasi ketika elemen `section3` mencapai bagian bawah halaman
        scrub: 5, // Animasi mengikuti scroll
        markers: false
    },
    duration: .1,
    stagger: 0.0010, // Animasi berurutan
    scale: 0, // Mulai dari skala 0 (tak terlihat)
    transformOrigin: "center", // Transformasi dari tengah elemen
    opacity: 0, // Mulai dari opasitas 0
    ease: "bounce" 
});
    