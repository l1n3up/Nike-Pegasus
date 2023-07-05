$(document).ready(function() {
    $('.roadmap_slider').slick({
      dots: true,
      dotsClass: 'slick-dots',
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 1000
    });
  
    $('.roadmap_slider_img').click(function() {
      $('.roadmap_slider').slick('slickNext');
    });
  });

  $(document).ready(function() {
    $('.marathon_slider').slick({
      dots: false,
      dotsClass: 'slick-dots',
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000
    });
  
    $('.marathon_slider_img').click(function() {
      $('.marathon_slider').slick('slickNext');
    });
  });


  document.addEventListener("DOMContentLoaded", function () {
    const menuTabs = document.querySelectorAll(".menu-tab");
  
    menuTabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        const selectedTab = document.querySelector("#" + this.dataset.tab);
  
        if (!selectedTab.classList.contains("active")) {
          const activeContent = document.querySelector(".tab_content.active");
          activeContent.classList.remove("active");
          const activeTab = document.querySelector(".menu-tab.active");
          activeTab.classList.remove("active");
  
          selectedTab.classList.add("active");
          this.classList.add("active");
        }
      });
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const menuTabs = document.querySelectorAll(".partners_menu-tab");
  
    menuTabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        const selectedTab = document.querySelector("#" + this.dataset.tab);
        console.log(selectedTab);
        if (!selectedTab.classList.contains("active")) {
          const activeContent = document.querySelector(".partners_tab_content.active");
          activeContent.classList.remove("active");
          const activeTab = document.querySelector(".partners_menu-tab.active");
          activeTab.classList.remove("active");
  
          selectedTab.classList.add("active");
          this.classList.add("active");
        }
      });
    });
  });