const countersEl = 
document.querySelectorAll(".counter");

countersEl.forEach(counterElement =>{
    counterElement.innerHTML="0";
    incrementCounter();
    function incrementCounter (){
        let currentNum = +counterElement.innerHTML;

        const dataCeil = counterElement.getAttribute("data-ceil");
       
        const increment = dataCeil/29;

        currentNum = Math.ceil(currentNum+increment);

        counterElement.innerHTML = currentNum;

        if(currentNum < dataCeil){
            setTimeout(incrementCounter,50)
        }

    }
})