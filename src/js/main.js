import intlTelInput from 'intl-tel-input';


import { dropdown } from "./functions/dropdown.js";
import { burger } from "./functions/burger.js";
import { mobileDropdown } from "./functions/mobile-dropdown.js";
import { scroll } from "./functions/scroll.js";
import { swiperAll } from "./functions/swiperAll.js";
import { modalVideo } from "./functions/modalVideo.js";
import { validateForms } from "./functions/validate-forms.js";


window.addEventListener('DOMContentLoaded',(e)=>{
    
   const phoneInputField = document.querySelector("#phone");
   const iti = intlTelInput(phoneInputField, {
      initialCountry: "ru",
      utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.13/js/utils.js"
   });

   scroll()
   dropdown()
   burger()
   mobileDropdown()
   swiperAll()
   modalVideo()
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
      ruleSelector: '.help__comment',
      rules: [
        {
          rule: 'required',
          errorMessage: 'Введите комментарий!',
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

  validateForms('#helpform', rules, checkboxes, () => {
    console.log('Форма успешно отправлена!');
  });


})

