import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

export function swiperAll(){
    const situtation = new Swiper('.situation__swiper', {
        modules:[Navigation, Pagination],
        slidesPerView: 'auto',
        loop: true,
        speed: 500,
        navigation: {
            nextEl: '.situation__button-next',
            prevEl: '.situation__button-prev',
          },
          pagination: {
            el: '.situation__pagination',
            clickable: true,
            renderBullet: function (index, className) {
              return `<span class="${className}"></span>`;
            }
          },
        spaceBetween: 16,
        breakpoints:{
          320:{
            spaceBetween: 8,
          },
          767:{
            spaceBetween: 16  ,
          }
        },
        on: {
          init: function () {
            updatePagination(this);
          },
          slideChange: function () {
            updatePagination(this);
          }
        }
    })

    const review = new Swiper('.review__swiper', {
      modules:[Navigation, Pagination],
      slidesPerView: 'auto',
      loop: true,
      navigation: {
          nextEl: '.review__button-next',
          prevEl: '.review__button-prev',
        },
        pagination: {
          el: '.review__pagination',
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class="${className}"></span>`;
          }
      
        },
        breakpoints:{
          320:{
            spaceBetween: 8,
          },
          767:{
            spaceBetween: 18,
          }
        },
        on: {
          init: function () {
            updatePagination(this);
          },
          slideChange: function () {
            updatePagination(this);
          }
        }
    })    

    const news = new Swiper('.news__swiper', {
      modules:[Navigation, Pagination],
      slidesPerView: 'auto',
      loop: true,
      navigation: {
          nextEl: '.news__button-next',
          prevEl: '.news__button-prev',
        },
        pagination: {
          el: '.news__pagination',
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class="${className}"></span>`;
          }
        },
      spaceBetween: 16,
      breakpoints:{
        320:{
          spaceBetween: 8,
        },
        767:{
          spaceBetween: 16,
        }
      },
      on: {
        init: function () {
          updatePagination(this);
        },
        slideChange: function () {
          updatePagination(this);
        }
      }
    })

    const team = new Swiper('.team__swiper', {
      modules:[Navigation, Pagination],
      slidesPerView: 'auto',
      navigation: {
          nextEl: '.team__button-next',
          prevEl: '.team__button-prev',
        },
        pagination: {
          el: '.team__pagination',
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class="${className}"></span>`;
          }
        },
      breakpoints:{
        320:{
          spaceBetween: 8,
        },
        767:{
          spaceBetween: 16,
        }
      },
      on: {
        init: function () {
          updatePagination(this);
        },
        slideChange: function () {
          updatePagination(this);
        }
      }
    })

    const blogNews = new Swiper('.blog-news__swiper', {
      modules:[ Pagination],
      slidesPerView: 'auto',
      loop: true,
        pagination: {
          el: '.blog-news__pagination',
          clickable: true
        },
      spaceBetween: 16,
      breakpoints:{
        320:{
          spaceBetween: 8,
        },
        767:{
          spaceBetween: 16,
        }
      }
  })

  function updatePagination(swiper) {
    const totalBullets = swiper.pagination.bullets.length;
    const maxVisible = 4;
    const activeIndex = swiper.activeIndex;
  
    swiper.pagination.bullets.forEach((bullet, index) => {
      if (index >= activeIndex - Math.floor(maxVisible / 2) && index <= activeIndex + Math.floor(maxVisible / 2)) {
        bullet.style.display = 'inline-block';
      } else {
        bullet.style.display = 'none';
      }
    });
  }
  
  updatePagination(team);
  updatePagination(situtation);
  updatePagination(review);
  updatePagination(news);
}