const buttons = document.querySelectorAll("button")
const uSelect = document.getElementById("uChoice")
const cSelect = document.getElementById("CChoice")
const tScore = document.getElementById("Score")


const choiceObj=['Rock',"Paper","Sciessor"]
let Score=0;
const start=() =>{

buttons.forEach(button => {
    button.onclick =() => {
        let cChoice = Math.floor(Math.random() * 3 )
        if(button.value=="Rock" && choiceObj[cChoice]=="Paper"){
            Score -=1;
        uSelect.innerHTML=button.value;
        cSelect.innerHTML= choiceObj[cChoice]
        tScore.innerHTML=Score;

        }
        
        else if(button.value=="Rock" && choiceObj[cChoice]=="Sciessor"){

            Score +=1;
        uSelect.innerHTML=button.value;
        cSelect.innerHTML= choiceObj[cChoice]
        tScore.innerHTML=Score;

        }

        else if(button.value=="Paper" && choiceObj[cChoice]=="Sciessor"){
            Score -=1;
        uSelect.innerHTML=button.value;
        cSelect.innerHTML= choiceObj[cChoice]
        tScore.innerHTML=Score;

        }

        else if(button.value=="Paper" && choiceObj[cChoice]=="Rock"){
            Score +=1;
        uSelect.innerHTML=button.value;
        cSelect.innerHTML= choiceObj[cChoice]
        tScore.innerHTML=Score;

        }

        else if(button.value=="Sciessor" && choiceObj[cChoice]=="Rock"){
            Score -=1;
        uSelect.innerHTML=button.value;
        cSelect.innerHTML= choiceObj[cChoice]
        tScore.innerHTML=Score;

        }

        else if(button.value=="Sciessor" && choiceObj[cChoice]=="Paper"){
            Score +=1;
        uSelect.innerHTML=button.value;
        cSelect.innerHTML= choiceObj[cChoice]
        tScore.innerHTML=Score;

        }

        else if(button.value=="end"){
            if(Score<0){
                tScore.style.color='red'
                tScore.innerText="You Lose By Score: "+Score
                Score=0
            }
            else if(Score==0){
                tScore.style.color='black'
                tScore.innerText="Tie"
                Score=0
            }

            else{
                tScore.style.color='Green'
                tScore.innerText="You Win By Score:"+Score
                Score=0
            }
            return Score

        }

        
        else{
            Score +=0;
            tScore.style.color='black'
        uSelect.innerHTML=button.value;
        cSelect.innerHTML= choiceObj[cChoice]
        tScore.innerHTML=Score;

        }
    
    }
    
});
}

start()

