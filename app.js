
// the actual text utilization starts here
var copytext = document.getElementById("in1");

let setcopy=()=>{
   
    copytext.focus();
    copytext.select();
    copytext.setSelectionRange(0,99999);
    navigator.clipboard.writeText(copytext.value);
    

   var x = document.querySelector("#copy_btn1");

   if(x.innerHTML==="Copy💬"){
    x.innerHTML="Copied✔️";
   }
   else{
    x.innerHTML="Copy💬";
   }
   
}

var addeventcopy = document.querySelector("#copy_btn1").addEventListener("click", setcopy);

//capitalize event
let captalize = ()=>{
    var splited = copytext.value.split(" ");
    for(let i=0; i< splited.length; i++){
      
        splited[i] = (`${splited[i][0].toUpperCase()+ splited[i].substr(1).toLowerCase()}`);    
    }
  copytext.value = splited.join(" ");

  // wow wow woow this was the most eisiest but relaxing part at the end
  //this was fun bruhh 😁😻
  
}

var addeventcapitalize  = document.querySelector("#btn1").addEventListener("click", captalize);

// to upper casing
let upperit =()=>{

    copytext.value = copytext.value.toUpperCase();
}

var addupperevent = document.querySelector("#btn2").addEventListener("click", upperit);

//to lowering 

let lowering =()=>{
    copytext.value = copytext.value.toLowerCase();
}

var addlowring  = document.querySelector("#btn3").addEventListener("click", lowering);


//clearing text
let clearing = ()=>{
   copytext.value = null;
}
var addclearing = document.querySelector("#btn4").addEventListener("click", clearing);


//trim text or remove extra space
let extrspace=()=>{ 

    copytext.value = copytext.value.replace(/^\s+|\s+$/gm,'');
}

var addtrim= document.querySelector("#btn5").addEventListener("click", extrspace);

// reversing text

let reversing=()=>{
    copytext.value = copytext.value.split("").reverse("").join("");
}
var addrev = document.getElementById("btn6").addEventListener("click", reversing);


// replaction 

 document.getElementById("btn7").addEventListener("click",()=>{
    var repl1 = document.getElementById("repl1").value;
    var repl2 = document.getElementById("repl2").value;
    copytext.value = copytext.value.replaceAll(repl1, (repl2+""));
 })

 
 // math sover  
 document.getElementById("btn8").addEventListener("click",()=>{
    copytext.value =  eval(copytext.value);
 })

 // find error 
document.getElementById("btn9"),addEventListener("click",()=>{
    
})


//count words
let countwords=()=>{
    var splited = copytext.value.split(" ");
    var dsc= document.getElementById("wordcount").innerHTML=(` ${splited.length} words and ${copytext.value.length} Charecters` );
    window.setTimeout(countwords, 1);
}
countwords();

//preview here
function preview(){
document.getElementById("words").innerHTML=copytext.value;
window.setTimeout(preview,1);
}
preview();



//theme change first
var themeelement = document.querySelector("#theme_p");

let changetheme=()=>{

    document.body.setAttribute("class","xbody");
    
    var butns = document.querySelectorAll(".btns");
    butns.forEach(chng =>{
        chng.classList.toggle("xthemebtns");
    })

    if(document.getElementById("mainh1").style.color=="black"){
        document.getElementById("mainh1").style.color="white";
    }
    else{
        document.getElementById("mainh1").style.color="black"
    }

    if(themeelement.style.justifyContent ==="flex-start"){
         themeelement.style.justifyContent ="flex-end";
         document.body.setAttribute("class","xbody");
        document.getElementsByClassName("circu")[0].style.backgroundColor="white";
        document.getElementsByClassName("parent_circu")[0].style.backgroundColor="#0069f3";
        document.getElementsByClassName("summury")[0].style.color="white";
        document.getElementById("main_home").style.color="white";
        document.getElementById("main_about").style.color="white";
        document.getElementsByClassName("main_h1")[0].style.textShadow= "1px 1px 0px #0267ff,-1px -1px 0px #0267ff,-1px 1px 0px #0267ff,1px -1px 0px #0267ff";
       

         
    }
    else{
        themeelement.style.justifyContent ="flex-start";
        document.body.setAttribute("class","normbody");
        document.getElementsByClassName("circu")[0].style.backgroundColor="#0061f1";
        document.getElementsByClassName("parent_circu")[0].style.backgroundColor="white";
        document.getElementsByClassName("summury")[0].style.color="black";
        document.getElementById("main_home").style.color="black";
        document.getElementById("main_about").style.color="black";
        document.getElementsByClassName("main_h1")[0].style.textShadow= "";

    }

    
   



}
themeelement.addEventListener("click", changetheme);


let mobilein=()=>{
    var todis = document.getElementsByClassName("navigations")[0];
    if(todis.style.display==="none"){
        todis.style.display="flex";
    }
    else{
        todis.style.display="none";
    }
}
var hamb = document.querySelector("#ham1").addEventListener("click",mobilein);

  

// desplaying more buttons

 document.getElementById("btnmore").addEventListener("click",()=>{
    var cont3 =document.getElementById("cont3");
    if(cont3.style.display=="none"){
        cont3.style.display="flex";
    }
    else{
        cont3.style.display="none";
    }

 });
 

