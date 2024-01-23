let supleft = document.querySelector("#supleft")
let supright = document.querySelector("#supright")
let infleft = document.querySelector("#infleft")
let infright = document.querySelector("#infright")
let preview = document.querySelector(".preview")



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
