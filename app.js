let bgColor = ["rgb(192, 48, 168)", "rgb(168, 43, 106)", "rgb(184, 95, 109)", "rgb(17, 159, 224)", "rgb(230, 121, 19)", 'pink'];



let btnChg = document.querySelector("#btn-chg");



btnChg.addEventListener("click", randomColor);

function randomColor(){
    let rbgColor = bgColor[Math.floor(Math.random() * bgColor.length)];
    let bg = document.querySelector("body");
    bg.style.backgroundColor = rbgColor;
    btnChg.style.color = rbgColor;

    btnChg.addEventListener("mouseover", function(){
        btnChg.style.color = rbgColor;
    })
    btnChg.addEventListener("mouseleave", function(){
        btnChg.style.color = 'white';
    })
    
    
}

