class ColorCard{
    id;
    colorCard;
    addToList;
    htmlElement;
    circle;
    text;

    constructor(newId, newColor, addToList){
        this.id = newId;
        this.color = newColor;
        this.addToList = addToList;

        this.htmlElement = document.createElement("li");
        this.htmlElement.classList = "colors__color";

        this.circle = document.createElement("figure");
        this.circle.classList = "colors__circle";
        this.circle.style.background = this.color;

        this.text = document.createElement("p");
        this.text.innerText = "Copied!";
        this.text.classList = "colors__text";

        this.htmlElement.onclick = this.onHTMLElementClicked;
        this.render();
        }

        onHTMLElementClicked = () =>{
            this.circle.classList.add("colors__circle--selected");
            document.title = this.color;
            window.navigator.clipboard.writeText(this.color);
        }

    render(){
        this.addToList.appendChild(this.htmlElement);
        this.htmlElement.appendChild(this.circle);
        this.htmlElement.appendChild(this.text);
    }
}

class ColorList{
    id;
    htmlElement;

    constructor(newId){
        this.id = newId;
        this.htmlElement = document.createElement("ul");
        this.htmlElement.id = this.id;
        this.htmlElement.classList.add("colors"); 
        this.render();
    }

    render(){
        document.querySelector("body").appendChild(this.htmlElement);

    }
}

const colorList = new ColorList("js--colors");

class HSLGenerator{
    randomHue;
    randomSaturation;
    randomLightness;

    constructor(){    
        this.generateHSL();
    }

    generateHue = function(){
        this.randomHue = Math.floor(Math.random() * (360 -1) +1);
    }

    generateSaturation = function(){
        this.randomSaturation =  Math.floor(Math.random() * (79 - 11) +11) + "%";
    }

    generateLightness = function(){
        this.randomLightness = Math.floor(Math.random() * (100 - 11 ) +11) + "%";
    }

    generateHSL = function(){
       this.generateHue();
       this.generateSaturation();
       this.generateLightness(); 
        this.hsl = `hsl(${this.randomHue}, ${this.randomSaturation}, ${this.randomLightness})`
    }
}

class App{
    id;
    colorList;
    hslgenerator;
    constructor(newId){
        this.id = newId;
        this.colorList = new ColorList(this.id);
        this.hslGenerator = new HSLGenerator();
        this.generateColorCards();
    }

    generateColorCards = function(){
        for(let i = 1; i <= 100; i++){
            this.hslGenerator.generateHSL();
            new ColorCard(i, this.hslGenerator.hsl, document.getElementById(this.colorList.id));
        }
    }
}

const app = new App("js--app");