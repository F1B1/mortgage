import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

export function swiperAll(){
    const situtation = new Swiper('.situation__swiper', {
        modules:[Navigation, Pagination],
        slidesPerView: 'auto',
        speed: 500,
        navigation: {
            nextEl: '.situation__button-next',
            prevEl: '.situation__button-prev',
          },
          pagination: {
            el: '.situation__pagination',
            clickable: true
          },
        spaceBetween: 16,
        breakpoints:{
          320:{
            spaceBetween: 8,
          },
          767:{
            spaceBetween: 16  ,
          }
        }
    })

    const review = new Swiper('.review__swiper', {
      modules:[Navigation, Pagination],
      slidesPerView: 'auto',
      navigation: {
          nextEl: '.review__button-next',
          prevEl: '.review__button-prev',
        },
        pagination: {
          el: '.review__pagination',
          clickable: true
        },
      spaceBetween: 18,
      breakpoints:{
        320:{
          spaceBetween: 8,
        },
        767:{
          spaceBetween: 18,
        }
      }
    })

    const news = new Swiper('.news__swiper', {
      modules:[Navigation, Pagination],
      slidesPerView: 'auto',
      navigation: {
          nextEl: '.news__button-next',
          prevEl: '.news__button-prev',
        },
        pagination: {
          el: '.news__pagination',
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

    const team = new Swiper('.team__swiper', {
      modules:[Navigation, Pagination],
      slidesPerView: 'auto',
      navigation: {
          nextEl: '.team__button-next',
          prevEl: '.team__button-prev',
        },
        pagination: {
          el: '.team__pagination',
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

    const blogNews = new Swiper('.blog-news__swiper', {
      modules:[ Pagination],
      slidesPerView: 'auto',
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
          spaceBetween: 16  ,
        }
      }
  })
}