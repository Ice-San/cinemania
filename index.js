/* ========================== */

/*        Start Now           */

/* ========================== */

//      Consts
const signin = document.getElementById("start-now-signin");
const startNowTitle = document.getElementById("start-now-title");

//      Code
signin.addEventListener("mouseover", () => {

    // Check if contains the reverse animation, if the condution is true it removes them
    if(signin.classList.contains("start-now-scale-effect-reverse") == true) {
        signin.classList.remove("start-now-scale-effect-reverse");
        startNowTitle.classList.remove("start-now-scale-effect-reverse");
    };

    signin.classList.add("start-now-scale-effect");
    startNowTitle.classList.add("start-now-scale-effect");
});

signin.addEventListener("mouseout", () => {
    signin.classList.remove("start-now-scale-effect");
    startNowTitle.classList.remove("start-now-scale-effect");

    // Adding the reverse animation
    signin.classList.add("start-now-scale-effect-reverse");
    startNowTitle.classList.add("start-now-scale-effect-reverse");
});