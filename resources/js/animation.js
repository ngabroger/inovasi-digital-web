

gsap.from("#item-ai", {
    scrollTrigger:{
        trigger: "#item-ai",
        start: "top center",
        bottom: "bottom center",
        scrub: false,
        markers: false,
    },
    duration: .1,
    stagger: 0.10, // Animasi berurutan
    scale: 0, // Mulai dari skala 0 (tak terlihat)
    transformOrigin: "center", // Transformasi dari tengah elemen
    opacity: 0, // Mulai dari opasitas 0
    ease: "bounce" // Efek bouncing
})

gsap.from("#jaringan path", {
    duration: .1,
    stagger: 0.10, // Animasi berurutan
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
        start: '-500 center',
        end: '-500 center', 
        scrub: 5, 
        markers: false
    },
    duration: .1,
    stagger: 0.0010, // Animasi berurutan
    scale: 0, 
    transformOrigin: "center",
    opacity: 0, 
    ease: "bounce" 
});
    
const section4 = document.querySelectorAll('#stairs4 path');
var tl4 =gsap.timeline();
tl4.from(section4,{
    scrollTrigger: {
        trigger: section3,
        start: 'top center', 
        end: 'bottom center', 
        scrub: 5,
        markers: false
    },
    duration: .1,
    stagger: 0.0010, // Animasi berurutan
    scale: 0, // Mulai dari skala 0 (tak terlihat)
    transformOrigin: "center", // Transformasi dari tengah elemen
    opacity: 0,
    ease: "bounce" 
});
    

const card_daps = document.getElementById('card-daps');
const card_ger = document.getElementById('card-ger');
var tl5 = gsap.timeline();
tl5.from(card_daps,{
    scrollTrigger: {
        trigger: card_daps,
        start: '-250px center',
        end: '-250px center', 
        scrub: 1, 
        markers: false
    },
    duration: 1,
    opacity: 0,
    y: 100,
     
});
tl5.from(card_ger,{
    scrollTrigger: {
        trigger: card_ger,
        start: '-250px center',
        end: '-250px center', 
        scrub: 1, 
        markers: false
    },
    duration: 1,
    opacity: 0,
    y: 100,
     
})

var tl6 = gsap.timeline({
    scrollTrigger: {
        trigger: '#app-screen',
        start: '100px center',
        end: '200px center',
        pin: true,
        markers: false,
    }
});

var tl7 = gsap.timeline({
    scrollTrigger: {
        trigger: '#judul-break',
        start: 'top center',
        end: 'bottom center',
     
        scrub:1,
        markers: false,
    }
});
tl7.from('#judul-break', {
    opacity: 0,
    duration: 1,
   
}); 
tl7.to('#judul-break', {
    opacity: 1,
    duration: 1,
    y: 0,
   
}); 

var tl8 = gsap.timeline({
    scrollTrigger: {
        trigger: '#judul-break2',
        start: 'top center',
        end: 'bottom center',
     
        scrub:2,
        markers: false,
    }
}).from('#judul-break2', {
    opacity: 0,
    duration: 1,
    scale: 1,
    y: 0,
   
}).to('#judul-break2', {
    opacity: 1,
    duration: 1,
   
    y: 0,
});
var tl9 = gsap.timeline({
    scrollTrigger: {
        trigger: '#judul-break3',
        start: 'bottom center',
        end: '+=300',
     
        scrub:1,
        markers: false,
    }
}).from('#judul-break3', {
    opacity: 0,
    duration: 1,
    scale: 1,
    y: 0,
   
}).to('#judul-break3', {
    opacity: 1,
    duration: 1,
   
    y: 0,
   
});
var tl10 = gsap.timeline({
    scrollTrigger: {
        trigger: '#judul-break4',
        start: 'bottom center',
        end: '+=300',
     
        scrub:1,
        markers: false,
    }
}).from('#judul-break4', {
    opacity: 0,
    duration: 1,
    scale: 1,
    y: 0,
   
}).to('#judul-break4', {
    opacity: 1,
    duration: 1,
   
    y: 0,
   
});


gsap.registerPlugin(ScrollTrigger);
gsap.from('.article-card', {
  opacity: 0,

  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: '.article-card',
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none none'
  }
});

gsap.from("#articleDetail > *", {
    opacity: 0,
    y: 50,
    duration: 0.5,
    stagger: 0.2,
  });
