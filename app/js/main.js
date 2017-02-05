
window.onload = function(){
  const mainNav = document.querySelector(".main-nav");
  let stickingPoint = mainNav.offsetTop;


  function stickyNav(){
    if(window.scrollY >= stickingPoint){
      document.body.style.paddingTop = mainNav.offsetHeight;
      document.body.classList.add("sticky-nav");
      document.querySelector(".main-nav").style.position = "fixed";

    }else{
      document.body.style.paddingTop = 0;
      document.body.classList.remove("sticky-nav");
      document.querySelector(".main-nav").style.position = "relative";
    }
  }

  window.addEventListener("scroll", stickyNav);

/* ---- Slick Carousel Code --- */
  //   $(document).ready(function(){
  //     $('.owl-carousel').owlCarousel({
   //
  //
  //     });
   //
   //
  //  });

}
