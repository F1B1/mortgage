export function selectCustom() {
    const customSelectTrigger = document.querySelector(".custom-select-trigger");
    const customOptions = document.querySelector(".custom-options");
    const customSelect = document.querySelector(".custom-select");
    const hiddenSelectInput = document.querySelector("#hidden-select");
    const label = document.querySelector('label[for="select-modal"]'); 

    customSelectTrigger.addEventListener("click", function () {
        customSelectTrigger.classList.toggle("open");
        customOptions.classList.toggle("open");
        customSelect.classList.toggle("open");
    });

    document.querySelectorAll(".custom-option").forEach(function (option) {
        option.addEventListener("click", function () {
            customSelectTrigger.textContent = this.textContent;
            hiddenSelectInput.value = customSelectTrigger.textContent;
            customOptions.classList.remove("open");
            customSelectTrigger.classList.remove("open");
            customSelect.classList.remove("open");    
        });
    });

    document.addEventListener("click", function (e) {
        if (!customSelectTrigger.contains(e.target) && !customOptions.contains(e.target) && !label.contains(e.target)) {
            customOptions.classList.remove("open");
            customSelectTrigger.classList.remove("open");
            customSelect.classList.remove("open");
        }
    });

    label.addEventListener("click", function () {
        customSelectTrigger.click();
    });

}
