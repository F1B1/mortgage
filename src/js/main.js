import intlTelInput from 'intl-tel-input';


import { burger } from "./functions/burger.js";
import { mobileDropdown } from "./functions/mobile-dropdown.js";
import { scroll } from "./functions/scroll.js";
import { swiperAll } from "./functions/swiperAll.js";
import { modalVideo } from "./functions/modalVideo.js";
import { validateForms } from "./functions/validate-forms.js";
import { paginationWidget } from './functions/paginationWidget.js';


window.addEventListener('DOMContentLoaded',(e)=>{
    

 

  
    const functionsMap = {
      // "#phone": () => {
      //     const phoneInputField = document.querySelector("#phone");
      //     if (phoneInputField) {
      //         intlTelInput(phoneInputField, {
      //             initialCountry: "ru",
      //             utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.13/js/utils.js"
      //         });
      //     }
      // },
      ".header": scroll,
      ".icon-menu": burger,
      ".header__link-mobile[data-target]": mobileDropdown,
      ".swiper": swiperAll,
      ".video": modalVideo,
      "#helpform1": () => validateForms('#helpform1', rules, checkboxes, () => {
          console.log('Форма успешно отправлена');
      }),
      ".pagination-widget": paginationWidget
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

