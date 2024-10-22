const color = document.getElementsByClassName("colors__color");


for(let i = 0; i < color.length; i++ ){
    //nummer incl 1-360 incl => hue
    //percentage incl 111-100 => saturation
    // % incl 11-100 => licht

    color[i].style.animationDelay = i/10 + "s";

    let randomHue = Math.floor(Math.random() * (360 -1) +1);
    let randomSaturation = Math.floor(Math.random() * (79 - 11) +11) + "%";
    let randomLightness = Math.floor(Math.random() * (100 - 11 ) +11) + "%";

    color[i].children[0].style.background = `hsl(${randomHue}, ${randomSaturation}, ${randomLightness})`;
        
    /*onclick*/
    color[i].onclick = function(){
        color[i].children[0].classList.add("colors__circle--selected");
        navigator.clipboard.writeText(color[i].children[0].style.background)
        document.title = color[i].children[0].style.background;
    }
}

