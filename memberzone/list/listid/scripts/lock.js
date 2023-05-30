//  Set Vars

const btn = document.getElementById("btn-privacy");
const btnColor = document.getElementById("btn-color");
const btnContainer = document.getElementById("icon-container");

// Set Privacy in the list code

btn.addEventListener("click", () => {
    btnColor.classList.toggle("btn-color");
    btnContainer.classList.toggle("btn-container");
});