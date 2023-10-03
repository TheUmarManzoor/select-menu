const selectedField = document.getElementById("selected-field");
const selectedText = document.getElementById("selected-text");
const options = document.getElementsByClassName("options");
const list = document.getElementById("list");
const arrowIcon = document.getElementById("arrowIcon")


selectedField.onclick = function(){
    list.classList.toggle("hide")
    arrowIcon.classList.toggle("rotate")
}

for (const option of options) { 
    option.addEventListener('click', function(){
        selectedText.innerHTML = this.textContent;
        list.classList.toggle("hide")
        arrowIcon.classList.toggle("rotate");
    });
}
