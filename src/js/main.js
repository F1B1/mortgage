import intlTelInput from 'intl-tel-input';


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
      "#helpform1": () => validateForms('#helpform1', rules, checkboxes, () => {
          console.log('Форма успешно отправлена');
      }),
      "#helpform2": () => validateForms('#helpform2', rules, checkboxes, () => {
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
  };
 
  const rules = [
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
    },
    {
      ruleSelector: '.help__checkbox',
      rules: [
        {
          rule: 'required',
          errorMessage: 'Подтвердите обработку персональный данных',
        },
      ],
    },
  ];
 
  const checkboxes = [
    {
      selector: '.help__checkbox',
      errorMessage: 'Необходимо согласие на обработку данных!',
    },
  ]; 

  Object.keys(functionsMap).forEach(selector => {
      if (document.querySelector(selector)) {
          functionsMap[selector]();
      }
  });

  

})
