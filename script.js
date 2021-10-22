/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.querySelector('header')
    if(this.scrollY >= 50) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


// ---------Swiper----------//
const myswiper = document.querySelector('.mySwiper')
var swiper = new Swiper(myswiper, {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 40,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
  });