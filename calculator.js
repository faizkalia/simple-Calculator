let input = document.querySelector('#input')
let buttons=document.querySelectorAll("p")
input.value=localStorage.getItem("savedInput")||""

buttons.forEach(button => {
    button.addEventListener("click", function () {
        let value=button.textContent
        if(input.value.length<12||value==="AC"||value==="="){
        if(value==="AC"){
            input.value=""
            
        }else if(value==="="){
            try{
                let result=eval(input.value.replace("x","*").replace("÷","/"))
                input.value=result.toLocaleString();
            }catch(error){
                input.value="Error"
            }
        }else if(value==="DEL"){
            input.value=input.value.slice(0,-1)
        }
        else{

                input.value += value;
            
            
        }
        localStorage.setItem("savedInput",input.value)
        }
        
    });
});


