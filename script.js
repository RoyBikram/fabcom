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
  

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 200;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[data-location*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav_menu a[data-location*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)


function scrollToTargetAdjusted(element) {
    if (element.id == 'community' || element.id == 'member' || element.id == 'app') {
        var headerOffset = 120;
        console.log('working');
    } else {
        var headerOffset = 50;
    }
    var elementPosition = element.offsetTop;
  var offsetPosition = elementPosition - headerOffset;
  
  window.scroll({
      top: offsetPosition,
      behavior: "smooth"
  });   
}
// ---------------Smooth Scroll----------------
document.querySelectorAll('.nav_menu a').forEach(each => {
    each.addEventListener('click', (event) => {
        var location = event.target.getAttribute('data-location')
        scrollToTargetAdjusted(document.querySelector(location))
        
    })
});