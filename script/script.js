let flocken = ["❄","*","+","-"];
let counter = 0;
let cnt = document.getElementById("cnt").innerHTML;

function letItSnow() {
    const schneeflocke = document.createElement("div");
    schneeflocke.innerHTML = flocken[Math.floor(Math.random()*flocken.length)];
    schneeflocke.classList.add('schnee');
    schneeflocke.style.left = Math.random() * 100 + "%";
    schneeflocke.style.animationDuration = 5 + Math.random() * 15 + "s";
    schneeflocke.style.fontSize = Math.random() * 2 + "vw";
    schneeflocke.style.opacity = Math.random();
    schneeflocke.style.filter = "blur(" + Math.random() * 3 + "px)";

    document.body.appendChild(schneeflocke);
    cnt = counter++;

    setTimeout(() =>    {schneeflocke.remove();
                         cnt = counter--;}, 15000 )
}

setInterval(letItSnow, 15);