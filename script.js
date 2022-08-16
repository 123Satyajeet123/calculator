let screen = document.getElementById("screen");
buttons = document.querySelectorAll("button");
let screenvalue="";
//getting input to console
for(item of buttons){
    item.addEventListener("click",(e)=>{
        buttontext = e.target.innerText; //fetches the innerTEXT to button text
        if(buttontext=="X"){
            buttontext="*";
            screen.value +=buttontext; //adds the text to screen
            screen.value =screenvalue;
        }
        else if(buttontext=="C"){
            screenvalue= "";
            screen.value =screenvalue;
        }
        else if(buttontext=="="){
            screen.value = eval(screenvalue);
        }
        else{
            screenvalue +=buttontext;
            screen.value=screenvalue;
        }
    });
}