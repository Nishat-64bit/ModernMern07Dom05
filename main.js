
//// learn getdate method from w3school 
// =================start game=======================
////catch variable 

const taktime= document.querySelector(".taktime")
const takminute= document.querySelector(".takminute")
const taksecond= document.querySelector(".taksecond")
const btn = document.querySelector(".btn")
const output = document.querySelector(".output")
const End = document.querySelector(".End")
const allError = document.querySelector(".allError")


// =============================== HOUR =============================================

let hours ;
let stopinterval;
taktime.addEventListener("change",(e)=>{
    // ekon jodi user string use kore 
    if(isNaN(e.target.value)){
        allError.innerHTML= "Please Insert Number"
        return
    }else{
        hours= e.target.value // ami jeta input dibo sei number theke 
    }
    // console.log(e.target.value); // console ektu jaka den
})

//start addevent listener
btn.addEventListener("click",()=>{
    // jodi hours e kicu na thake 
    if (hours){
        start()
    }
   
})

//start func catch
function start() {
    stopinterval=setInterval(()=>{
        countdown()
    },1000)
}

//countdown func catch 
function countdown() {
    --hours;
    output.innerHTML=hours
    output.style.backgroundColor= "red"
    // if hours == 0 then stop
    if(hours==0){
        clearInterval(stopinterval) // stopinterval dilam karon ae func er vitore start and stop kora jabe
    }
}

//End addEvent listener
End.addEventListener("click",()=>{
    stop()
})

//stop func
function stop() {
    clearInterval(stopinterval)
}






















