import { burger } from "./functions/burger.js";
import { mobileDropdown } from "./functions/mobile-dropdown.js";
import { scroll } from "./functions/scroll.js";
import { swiperAll } from "./functions/swiperAll.js";
import { modalVideo } from "./functions/modalVideo.js";
import { validateForms } from "./functions/validate-forms.js";
import { paginationWidget } from './functions/paginationWidget.js';
import { switchTab } from './functions/switchTab.js';
import { createCardPage1 } from './functions/paginationPage1.js';
import { createCardPage2 } from './functions/paginationPage2.js';
import { createCardPage3 } from './functions/paginationPage3.js';
import { createCardPage4 } from './functions/paginationPage4.js';
import { spoiler } from './functions/spoiler.js';
import { question } from './functions/question.js';
import { modal } from "./functions/modal.js";
import { loadMap } from "./functions/map.js";
import { currentYear } from "./functions/currentYear.js";
import { showButton } from "./functions/showbutton.js";
import { selectCustom } from "./functions/custom-select.js";

import { 
  animatePrimary,
  animateHeader, 
  animateColumns, 
  animateReviewTitle, 
  animatePartnersTitle, 
  animateHelpBody, 
  animateInviteSection
} from './functions/gsap-anim.js';



window.addEventListener('DOMContentLoaded',(e)=>{

    
  document.addEventListener('click', function(event) {
    if (event.target.closest('.review__column')) {
        spoiler(event);
    }
  });


    const functionsMap = {
     
      ".header": scroll,
      ".icon-menu": burger,
      ".header__link-mobile[data-target]": mobileDropdown,
      ".swiper": swiperAll,
      ".video": modalVideo,
      "#helpform1": () => validateForms('#helpform1', [
        {
          ruleSelector: '.help__name',
          rules: [
            {
              rule: 'required',
              errorMessage: 'Введите ваше имя!',
            },
            {
              rule: 'minLength',
              value: 3,
              errorMessage: 'Имя должно содержать минимум 3 символа!',
            },
          ],
        },
        {
          ruleSelector: '.help__phone',
          rules: [
            {
              rule: 'required',
              errorMessage: 'Введите ваш номер телефона!',
            },
          ],
          tel: true,
          telError: 'Введите корректный номер телефона!',
        }
      ], [
        {
          selector: '.help__checkbox',
          errorMessage: 'Необходимо согласие на обработку данных!',
        },
      ], () => {
          console.log('Форма успешно отправлена');
      }),
      "#helpform-company": () => validateForms('#helpform-company', [
        {
          ruleSelector: '#name-company',
          rules: [
            {
              rule: 'required',
              errorMessage: 'Введите ваше имя!',
            },
            {
              rule: 'minLength',
              value: 3,
              errorMessage: 'Имя должно содержать минимум 3 символа!',
            },
          ],
        },
        {
          ruleSelector: '#phone-company',
          rules: [
            {
              rule: 'required',
              errorMessage: 'Введите ваш номер телефона!',
            },
          ],
          tel: true,
          telError: 'Введите корректный номер телефона!',
        }
      ], [
        {
          selector: '#agreement-company',
          errorMessage: 'Необходимо согласие на обработку данных!',
        },
      ], () => {
          console.log('Форма успешно отправлена');
      }),
      "#modal-form": () => validateForms('#modal-form', [
        {
          ruleSelector: '#name-modal',
          rules: [
            {
              rule: 'required',
              errorMessage: 'Введите ваше имя!',
            },
            {
              rule: 'minLength',
              value: 3,
              errorMessage: 'Имя должно содержать минимум 3 символа!',
            },
          ],
        },
        {
          ruleSelector: '#phone-modal',
          rules: [
            {
              rule: 'required',
              errorMessage: 'Введите ваш номер телефона!',
            },
          ],
          tel: true,
          telError: 'Введите корректный номер телефона!',
        }
      ], [
        {
          selector: '#agreement-modal',
          errorMessage: 'Необходимо согласие на обработку данных!',
        },
      ], () => {
          console.log('Форма успешно отправлена');
      }),
      ".case__body":()=>switchTab('[data-content]','.case__tab'),
      ".contact__body":()=>switchTab('[data-content]','.contact__button'),
      ".vacation__body":()=>switchTab('[data-content]','.vacation__button'),
      ".choose__body":()=>switchTab('[data-content]', '.choose__tab'),
      ".pagination-widget-blog": ()=>paginationWidget({
        jsonFile: 'json/blog.json',
        itemsPerPageDesktop: 8,
        itemsPerPageMobile: 5,
        createCard: createCardPage1,
        contentId:'content-blog',
        pageNumber:'pageNumbers-blog',
        showMore: 'showMore-blog',
        nextBtn:'nextPage-blog',
        prevBtn:'prevPage-blog',
        isPage1: true
      }),
      ".pagination-widget-case": ()=>paginationWidget({
        jsonFile: 'json/case.json',
        itemsPerPageDesktop: 6,
        itemsPerPageMobile: 3,
        contentId:'content-case',
        pageNumber:'pageNumbers-case',
        showMore: 'showMore-case',
        nextBtn:'nextPage-case',
        prevBtn:'prevPage-case',
        createCard: createCardPage2,
      }),
      ".pagination-widget-review": ()=>paginationWidget({
        jsonFile: 'json/review.json',
        itemsPerPageDesktop: 9,
        itemsPerPageMobile: 4,
        contentId:'content-review',
        pageNumber:'pageNumbers-review',
        showMore: 'showMore-review',
        nextBtn:'nextPage-review',
        prevBtn:'prevPage-review',
        createCard: createCardPage3,
      }),
      ".pagination-widget-moscow": ()=>paginationWidget({
        jsonFile: 'json/vacanci.json',
        itemsPerPageDesktop: 4,
        itemsPerPageMobile: 4,
        contentId:'content-moscow',
        pageNumber:'pageNumbers-moscow',
        showMore: 'showMore-moscow',
        nextBtn:'nextPage-moscow',
        prevBtn:'prevPage-moscow',
        createCard: createCardPage4,
      }),
      ".pagination-widget-piter": ()=>paginationWidget({
        jsonFile: 'json/vacanci.json',
        itemsPerPageDesktop: 4,
        itemsPerPageMobile: 4,
        contentId:'content-piter',
        pageNumber:'pageNumbers-piter',
        showMore: 'showMore-piter',
        nextBtn:'nextPage-piter',
        prevBtn:'prevPage-piter',
        createCard: createCardPage4,
      }),
      ".pagination-widget-perm": ()=>paginationWidget({
        jsonFile: 'json/vacanci.json',
        itemsPerPageDesktop: 4,
        itemsPerPageMobile: 4,
        contentId:'content-perm',
        pageNumber:'pageNumbers-perm',
        showMore: 'showMore-perm',
        nextBtn:'nextPage-perm',
        prevBtn:'prevPage-perm',
        createCard: createCardPage4,
      }),
      ".question__btn": question,
      ".contact__map": loadMap,
      ".footer__terms": ()=>modal('.privacy-btn', '.modal-privacy', '.modal__close'),
      ".modal-button": ()=>modal('.modal-button', '.modal-form', '.modal__close'),
      ".footer__current-year": ()=>currentYear('.footer__current-year'),
      ".credits__button":showButton,
      ".help__select":selectCustom,
  };

  Object.keys(functionsMap).forEach(selector => {
      if (document.querySelector(selector)) {
          functionsMap[selector]();
      }
  });

  const laptopScreen = window.matchMedia('(min-width: 992px)')

  if(laptopScreen.matches){
    const animations = [
      { selector: '.header', action: animateHeader },
      { selector: '.primary', action: ()=>animatePrimary('.primary__bg-primary', '.primary__title', '.primary__sub-title', '.primary__makes', '.primary__button') },
      { selector: '.primary-second', action: ()=>animatePrimary('.primary__bg-primary', '.primary-second__title', '.primary-second__sub-title') },
      { selector: '.primary-three', action: ()=>animatePrimary('.primary__bg-primary', '.primary-second__title', '.primary-second__sub-title') },
      { selector: '.invite__body', action: animateInviteSection },
      { selector: '.actual-big__wrapper', action: ()=> animateHelpBody('.actual-big__wrapper') },
      { selector: '.primary__columns', action: () => animateColumns('.primary__columns', '.primary__column') },
      { selector: '.invite__body', action: ()=>animateInviteSection('.invite__body', '.invite__column', '.invite__video') },
      { selector: '.review__title', action: animateReviewTitle },
      { selector: '.review__title', action: ()=>animateReviewTitle('.review__title') },
      { selector: '.review__columns', action: () => animateColumns('.review__columns', '.review__column') },
      { selector: '.additionally__columns', action: ()=> animateHelpBody('.additionally__columns') },
      { selector: '.additionally__title', action: ()=>animatePartnersTitle('.additionally__title') },
      { selector: '.help__body', action:()=> animateHelpBody('.help__body') },
      { selector: '.actual__body', action:()=> animateHelpBody('.actual__body') }
    ];
  
    animations.forEach(({ selector, action }) => {
      if (document.querySelector(selector)) {
        action();
      }
    });
  }

})
