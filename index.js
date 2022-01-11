
let screen = document.getElementById('screen');
buttons = $('button');
let screenValue = '';
for(item of buttons){
    item.addEventListener("click", (a)=>{
        buttonText = a.target.innerText;
        console.log('Button texted is',buttonText);
        if(buttonText=='C'){
            screenValue="";
            screen.value = screenValue;
        }
        else if(buttonText == "="){
            screen.value=eval(screenValue)
        }
        else if(buttonText == 'X'){
            screenValue = screenValue.substring(0,screenValue.length-1);
            screen.value=screenValue;
        }
        else{
            screenValue+=buttonText;
            screen.value=screenValue;
        }
    })
}
