var typed = new Typed('.type', {
    strings: ['THE WORLD.', 'BANGLADESH.','SAIDI ARABIA.','MADINA.','JAPAN.', 'ENGLAND.'],
    typeSpeed: 60,
    backSpeed: 60,
    loop:true,
});


let International = document.getElementById('International');
let sub = document.getElementById('sub');
    International.addEventListener('click',function(){
       
        if(sub.style.visibility === "none" || sub.style.transform === "scaleY(0)"){
            sub.style.visibility = "visible";
            sub.style.transform = "scaleY(1)";
            sub2.style.visibility = "none";
            sub2.style.transform = "scaleY(0)";
            sub3.style.visibility = "none";
            sub3.style.transform = "scaleY(0)";

        }else{
            sub.style.visibility = "none";
            sub.style.transform = "scaleY(0)";
        }
       
        

    })
let Bagladesh = document.getElementById('Bagladesh');
let sub2 = document.getElementById('sub2');
    Bagladesh.addEventListener('click',function(){
      
        if(sub2.style.visibility === "none" || sub2.style.transform === "scaleY(0)"){
            sub2.style.visibility = "visible";
            sub2.style.transform = "scaleY(1)";
            sub3.style.visibility = "none";
            sub3.style.transform = "scaleY(0)";
            sub.style.visibility = "none";
            sub.style.transform = "scaleY(0)";
          
        }else{
            sub2.style.visibility = "none";
            sub2.style.transform = "scaleY(0)";
        }
        
       
        
       
        
    });
    let All_types = document.getElementById('All_types');
    let sub3 = document.getElementById('sub3');
    All_types.addEventListener('click',function(){
        
        if(sub3.style.visibility === "none" || sub3.style.transform === "scaleY(0)"){
            sub3.style.visibility = "visible";
            sub3.style.transform = "scaleY(1)";
            sub2.style.visibility = "none";
            sub2.style.transform = "scaleY(0)";
            sub.style.visibility = "none";
            sub.style.transform = "scaleY(0)";
        }else{
            sub3.style.visibility = "none";
            sub3.style.transform = "scaleY(0)";
        }
       
        
    });



let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let email = document.getElementById('email');
let paw = document.getElementById('paw');
let Cpaw = document.getElementById('Cpaw');
let submit = document.getElementById('submit');

let errorlname = document.getElementById('errorlname');
let errorfname = document.getElementById('errorfname');
let erroremail = document.getElementById('erroremail');
let errorpaw = document.getElementById('errorpaw');
let errorCpaw = document.getElementById('errorCpaw');
let flag = 1;
submit.addEventListener('click',function(e){
    if(fname.value == ""){
        errorfname.innerHTML = `<p id="top"></p><i class="fas fa-exclamation-triangle"> Write somthing!</i>`
    } else if(fname.value.length <= 5){
        errorfname.innerHTML = `<p id="top"></p><i class="fas fa-exclamation-triangle"> Write min 6 digit!</i>`
    }else{
        errorfname.innerHTML = " ";
    }
   if(lname.value == ""){
    errorlname.innerHTML = `<p id="top"></p><i class="fas fa-exclamation-triangle"> Write somthing!</i>`;
   }else if(lname.value.length <= 3){
    errorlname.innerHTML = `<p id="top"></p><i class="fas fa-exclamation-triangle"> Write min 4 digit!</i>`;
   }else{
    errorlname.innerHTML = " ";
   }
   if(email.value == ""){
    erroremail.innerHTML = `<p id="top"></p><i class="fas fa-exclamation-triangle"> Write somthing!</i>`
   }else if(email.value.length <= 15){
    erroremail.innerHTML = `<p id="top"></p><i class="fas fa-exclamation-triangle"> Write min 16 digit!</i>`
   }else{
    erroremail.innerHTML = " ";
   }
   if(paw.value == ""){
    errorpaw.innerHTML = `<p id="top"></p><i class="fas fa-exclamation-triangle"> Enter password!</i>`;
   }else if(paw.value.length < 6){
    errorpaw.innerHTML = `<p id="top"></p><i class="fas fa-exclamation-triangle"> Enter password min 6 digit!</i>`
   }else if(paw.value.length >= 20){
    errorpaw.innerHTML = `<p id="top"></p><i class="fas fa-exclamation-triangle"> Enter password max 20 digit!</i>`
   }else{
    errorpaw.innerHTML = " ";
   }
   if(Cpaw.value == ""){
    errorCpaw.innerHTML = `<p id="top"></p><i class="fas fa-exclamation-triangle"> Enter conferm password!</i>`;
   }else if(Cpaw.value.length < 6){
    errorCpaw.innerHTML = `<p id="top"></p><i class="fas fa-exclamation-triangle"> Enter password min 6 digit!</i>`
   }else if(paw.value !== Cpaw.value){
    errorCpaw.innerHTML = `<p id="top"></p><i class="fas fa-exclamation-triangle"> Password can't mach!</i>`
   }else if(paw.value === Cpaw.value){
    errorCpaw.innerHTML = " ";
    alert('Registration conferm.')
   }
   
   
e.preventDefault();
});


var typed = new Typed('.mosqueX', {
    strings: [' Bangladesh.',' Bangladesh.'],
    typeSpeed: 60,
    backSpeed: 60,
    loop:true,
});

let text_aria = document.getElementById('text_aria');
let word = document.getElementById('word');
let charecter = document.getElementById('charecter');
text_aria.addEventListener('input',function(){
    let text_aria = this.value;
    charecter.innerHTML = text_aria.length;


    text_aria = text_aria.trim();
    let splitx = text_aria.split(" ");
    let clineWord = splitx.filter(function(e){
        return e != "";
    })
    word.innerHTML = clineWord.length;
    
});
let cursor = document.getElementById('cursor')
let cursor2 = document.getElementById('cursor2')
document.addEventListener('mousemove',function(e){
cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: "+ e.clientY + "px;";
});


$(document).ready(function(){
    $("#nav_ico").click(function(){
        $(".nav").toggleClass("n");
    })
})