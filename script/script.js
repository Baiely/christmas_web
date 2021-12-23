let chars = ["❄", "*", "+", "-"];
function letItSnow() {
    const snowflake = document.createElement("div");
    snowflake.innerHTML = chars[Math.floor(Math.random() * chars.length)];
    snowflake.classList.add("snow");
    snowflake.style.left = Math.random() * 100 + "%";
    snowflake.style.animationDuration = 5 + Math.random() * 15 + "s";
    snowflake.style.fontSize = Math.random() * 2 + "vw";
    snowflake.style.opacity = Math.random();
    snowflake.style.filter = "blur(" + Math.random() * 3 + "px)";

    setTimeout(() =>    {schneeflocke.remove();
                         cnt = counter--;}, 15000 )
}

setInterval(letItSnow, 15);