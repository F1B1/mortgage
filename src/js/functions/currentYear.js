export function currentYear(yearEl){
    const elementYear = document.querySelector(yearEl)
    const year = new Date().getFullYear()
    elementYear.innerHTML = year
}