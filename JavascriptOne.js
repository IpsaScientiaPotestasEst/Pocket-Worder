

    const textArea = document.getElementById("textElement");
    const output = document.getElementById("output");
    const outputTwo = document.getElementById("outputTwo");


    const saved = localStorage.getItem("Data");

    const countSaved = localStorage.getItem("count");

    const fontSaved = localStorage.getItem("fontData");

    if (saved) {
        textArea.value = saved;
        output.textContent = saved;
    }
    
    if (countSaved) {
        outputTwo.textContent = countSaved;
    }
    
    const text = textArea.value;
    let zero = text.length; 
    if (zero == 0) {outputTwo.textContent = ""}

    let X;
    let XOutput;

    if (fontSaved) {
        X = parseInt(fontSaved);
        XOutput = X + 5;
    }

    else {
        X = 20;
        XOutput = 25;
    }





   

    

    textArea.addEventListener("input", function () {

    const text = textArea.value;

    localStorage.setItem("Data", text);

     const outputTwo = document.getElementById("outputTwo");

    if (text.trim() === "") {
        localStorage.clear();
        outputTwo.textContent = "";
        output.textContent = ""
        return;
    }

   

   


    output.textContent = text;

})





textArea.addEventListener("input", function(event){
const outputTwo = document.getElementById("outputTwo");
const text = textArea.value;
let zero = text.length; 
const fontOne = document.getElementById("FOutputOne");
const fontTwo = document.getElementById("FOutputTwo");

 outputTwo.textContent = zero + " characters";

 if (zero == 0) {outputTwo.textContent = ""}

 if (zero == 1) {outputTwo.textContent = zero + " character"}

fontOne.innerHTML = "Font size: " + X;
fontTwo.innerHTML = "Font size: " + X;

 localStorage.setItem("count", zero);


})

function onloads(){textArea.focus()}


window.onload = onloads();


const FIn = document.getElementById("F-In");

const FDe = document.getElementById("F-De");



    if (fontSaved) {
         textArea.style.fontSize = localStorage.getItem("fontData") + "px";
    }


FIn.addEventListener("click", function(){

    if (X > 30 || XOutput > 35) {X = 30; XOutput = 35;}

    X += 1;

    XOutput += 1;

    textArea.style.fontSize = X + "px";

    output.style.fontSize = XOutput + "px";

    localStorage.setItem("fontData",X);

    document.getElementById("FOutputOne").innerHTML = 
    
    "Font Size: " + localStorage.getItem("fontData");

    document.getElementById("FOutputTwo").innerHTML = 
    
    "Font Size: " + localStorage.getItem("fontData");

   

    
})



FDe.addEventListener("click", function(){

     if (X < 15 || XOutput < 20) {X = 15; XOutput = 20;}

    X -= 1;

    XOutput -= 1;

    textArea.style.fontSize = X + "px"; 

    output.style.fontSize = XOutput + "px"; 

    localStorage.setItem("fontData",X);

    document.getElementById("FOutputOne").innerHTML = 
    
    "Font Size: " + localStorage.getItem("fontData");

    document.getElementById("FOutputTwo").innerHTML = 
    
    "Font Size: " + localStorage.getItem("fontData");
     

    
})

    document.getElementById("FOutputOne").innerHTML = 
    
    "Font Size: " + localStorage.getItem("fontData");

    document.getElementById("FOutputTwo").innerHTML = 
    
    "Font Size: " + localStorage.getItem("fontData");



const expoBtn = document.getElementById("exportBtn");

function exporter(){
    const currentText = textArea.value;

    
    const safeText = currentText
        .replace(/\\/g, "\\\\")
        .replace(/{/g, "\\{")
        .replace(/}/g, "\\}")
        .replace(/\n/g, "\\par ");

    const fontSize  = parseInt(localStorage.getItem("fontData")) || 20;
    const rtfSize = fontSize * 2;

    const rtf =
        "{\\rtf1\\ansi\\deff0" +
        "{\\fonttbl{\\f0 Arial;}}" +
        `\\f0\\fs${rtfSize} ` +
        safeText +
        "}";
    const blob = new Blob([rtf], {type: "application/rtf"});
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement("a");

    a.href = url;
    a.download = "PocketWorder.rtf"
    a.click();

    URL.revokeObjectURL(url);
}

expoBtn.addEventListener("click", function(){exporter()})

document.addEventListener("keydown", function(event) {
    if (event.key === "AltKey" && event.key === "e" {
        event.preventDefault();
        textArea.readOnly = true;
        exporter();
        textArea.readOnly = false;
    }
});

