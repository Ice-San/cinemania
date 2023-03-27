/* ========================== */

/*        Start Now           */

/* ========================== */

//      Consts
const signin = document.getElementById("start-now-signin");
const startNowTitle = document.getElementById("start-now-title");

//      Code
signin.addEventListener("mouseover", () => {
    signin.classList.add("start-now-scale-effect");
    startNowTitle.classList.add("start-now-scale-effect");
});

signin.addEventListener("mouseout", () => {
    signin.classList.remove("start-now-scale-effect");
    startNowTitle.classList.remove("start-now-scale-effect");
});