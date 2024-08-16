export function showButton(){
    
    const columns = document.querySelectorAll(".credits__column");
    const button = document.querySelector(".credits__button");
    let visibleColumns = 4;

    function showColumns() {
        columns.forEach((column, index) => {
            if (index < visibleColumns) {
                column.style.display = "flex";
            } else {
                column.style.display = "none";
            }
        });

        if (visibleColumns >= columns.length) {
            button.style.display = "none";
        }
    }

    if(innerWidth <= 1024){
        showColumns();
        button.addEventListener("click", function() {
            visibleColumns += 4;
            showColumns();
        });
    }
    
}