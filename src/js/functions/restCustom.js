export  function resetCustomSelect() {
    const customSelectTrigger = document.querySelector(".custom-select-trigger");
    const hiddenSelectInput = document.querySelector("#hidden-select");
    customSelectTrigger.textContent = "Выберите услугу"; 
    hiddenSelectInput.value = "";
}