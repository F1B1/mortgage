import JustValidate from 'just-validate';
import Inputmask from "../../../node_modules/inputmask/dist/inputmask.es6.js";
import intlTelInput from 'intl-tel-input';

export const validateForms = (selector, rules, checkboxes = [], afterSend) => {

  const form = document?.querySelector(selector);
  const telSelector = form?.querySelector('input[type="tel"]');

  if (!form) {
    console.error('Нет такого селектора!');
    return false;
  }

  if (!rules) {
    console.error('Вы не передали правила валидации!');
    return false;
  }

  if (telSelector) {
    const iti = intlTelInput(telSelector, {
      initialCountry: 'auto',
      geoIpLookup: function(callback) {
        fetch('https://ipinfo.io/json')
          .then(response => response.json())
          .then(data => {
            callback(data.country);
          })
          .catch(() => {
            callback('us');
          });
      },
      utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js'
    });

    telSelector.addEventListener('countrychange', function() {
      Inputmask.remove(telSelector);
      Inputmask(iti.getSelectedCountryData().dialCode + " (999) 999-9999").mask(telSelector);
    });

    for (let item of rules) {
      if (item.tel) {
        item.rules.push({
          rule: 'function',
          validator: function() {
            const phone = telSelector.value.replace(/[^0-9]/g, '');
            return iti.isValidNumber();
          },
          errorMessage: item.telError
        });
      }
    }
  }

  const validation = new JustValidate(selector);

  for (let item of rules) {
    validation.addField(item.ruleSelector, item.rules);
  }

  if (checkboxes.length) {
    for (let item of checkboxes) {
      validation.addRequiredGroup(
        `${item.selector}`,
        `${item.errorMessage}`
      )
    }
  }

  validation.onSuccess((ev) => {
    let formData = new FormData(ev.target);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          if (afterSend) {
            afterSend();
          }
          console.log('Отправлено');
        }
      }
    }

    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);

    ev.target.reset();
  });

};
