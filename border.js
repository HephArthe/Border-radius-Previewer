let supleft = document.querySelector("#supleft")
let supright = document.querySelector("#supright")
let infleft = document.querySelector("#infleft")
let infright = document.querySelector("#infright")
let preview = document.querySelector(".preview")
let button = document.querySelector("button");
let advanced = document.querySelector(".advanced")
let advsupleft = document.querySelector("#advsupleft")
let advsupright = document.querySelector("#advsupright")
let advinfleft = document.querySelector("#advinfleft")
let advinfright = document.querySelector("#advinfright")


supleft.addEventListener("change", function(){
    if(supleft.value > 100){
        supleft.value=100;
    }
    if(supleft.value < 0){
        supleft.value=0;
    }
    preview.style.borderTopLeftRadius = supleft.value + "%";
})

supright.addEventListener("change", function(){
    if(supright.value > 100){
        supright.value=100;
    }
    if(supright.value < 0){
        supright.value=0;
    }
    preview.style.borderTopRightRadius = supright.value + "%";
})

infleft.addEventListener("change", function(){
    if(infleft.value > 100){
        infleft.value=100;
    }
    if(infleft.value < 0){
        infleft.value=0;
    }
    preview.style.borderBottomLeftRadius = infleft.value + "%";
})

infright.addEventListener("change", function(){
    if(infright.value > 100){
        infright.value=100;
    }
    if(infright.value < 0){
        infright.value=0;
    }
    preview.style.borderBottomRightRadius = infright.value + "%";
})

advsupleft.addEventListener("change", function(){
    if(advsupleft.value > 100){
        advsupleft.value=100;
    }
    if(advsupleft.value < 0){
        advsupleft.value=0;
    }
    preview.style.borderTopLeftRadius = supleft.value + "% " + advsupleft.value + "%";
})

advsupright.addEventListener("change", function(){
    if(advsupright.value > 100){
        advsupright.value=100;
    }
    if(advsupright.value < 0){
        advsupright.value=0;
    }
    preview.style.borderTopRightRadius = supright.value + "% " + advsupright.value + "%";
})

advinfleft.addEventListener("change", function(){
    if(advinfleft.value > 100){
        advinfleft.value=100;
    }
    if(advinfleft.value < 0){
        advinfleft.value=0;
    }
    preview.style.borderBottomLeftRadius = infleft.value + "% " + advinfleft.value + "%";
})

advinfright.addEventListener("change", function(){
    if(advinfright.value > 100){
        advinfright.value=100;
    }
    if(advinfright.value < 0){
        advinfright.value=0;
    }
    preview.style.borderBottomRightRadius = infright.value + "% " + advinfright.value + "%";
})

button.addEventListener("click", function(){
    if(advanced.style.display === "flex"){
        advanced.style.display = "none";
        button.innerHTML = "Advanced Options";
        preview.style.borderBottomRightRadius = infright.value + "%";
        preview.style.borderBottomLeftRadius = infleft.value + "%";
        preview.style.borderTopRightRadius = supright.value + "%";
        preview.style.borderTopLeftRadius = supleft.value + "%";
    }
    else{
        advanced.style.display = "flex";
        button.innerHTML = "Normal Options";
        advinfright.value=0;
        advinfleft.value=0;
        advsupright.value=0;
        advsupleft.value=0;
    }
})