// Declare Vars

const btn = document.getElementById("btn-add-delete");
const btnRotateEffect = document.getElementById("btn-rotate-effect");

// Code

btn.addEventListener("click", () => {
    btn.classList.toggle("btn-add-film-color");
    btnRotateEffect.classList.toggle("btn-add-film-rotate-effect");
})