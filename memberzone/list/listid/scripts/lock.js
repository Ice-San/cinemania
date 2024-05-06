//  Set Vars

const btn = document.getElementById("btn-privacy");
const btnColor = document.getElementById("btn-color");
const btnContainerFirst = document.getElementById("icon-container-first");
const btnContainer = document.getElementById("icon-container");

// Set Privacy in the list code

btn.addEventListener("click", () => {
    btnColor.classList.toggle("btn-color");
    btnContainerFirst.classList.toggle("btn-container-none");
    btnContainer.classList.toggle("btn-container");
    btnContainer.classList.toggle("btn-container-none");
});