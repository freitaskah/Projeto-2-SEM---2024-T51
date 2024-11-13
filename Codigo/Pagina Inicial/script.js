var swiper = new Swiper(".swiper", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    keyboard: true,
  });

  window.onload = () => {
    setTimeout(() => {
      document.querySelector('.splash-screen').classList.add('hide');
    }, 1000); 
  };

  
  

  