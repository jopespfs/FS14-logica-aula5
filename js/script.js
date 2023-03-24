let menus = document.querySelectorAll("#menu li")
let indicators = document.querySelector(".indicator")


for(let i = 0; i < menus.length; i++) {
    menus[i].addEventListener("click", function() {
        deselect();
        indicators.style = `--pos: ${i}`
        this.classList.add("active")
    })
}

function deselect() {
    for(let i = 0; i < menus.length; i++) {
        menus[i].classList.remove("active");
    }
}