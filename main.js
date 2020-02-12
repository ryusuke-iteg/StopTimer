'use strict';

{

  const timer = document.getElementById('timer');
  const start = document.getElementById('start');
  const reset = document.getElementById('reset');
 

  let startTime;
  let timeoutId;
  let stopTime =0;
  


  function countUp(){
    const d = new Date(Date.now()- startTime + stopTime);
    const m = String(d.getMinutes()).padStart(2,'0');
    const s = String(d.getSeconds()).padStart(2,'0');
    const ms = String(d.getMilliseconds()).padStart(3,'0');
    timer.textContent = `${m}:${s}.${ms}`

    timeoutId = setTimeout(()=>{
      countUp();
    },10);
  }
  



  function setoButtonSI(){
    start.classList.remove('disabled');
    reset.classList.add('disabled');
    
  }

  function setoButtonSR(){
    start.classList.remove('disabled');
    reset.classList.add('disabled');
    

  }

  function setoButtonSS(){
    start.classList.remove('disabled');
    reset.classList.remove('disabled');
  
  }

  setoButtonSI();
  start.addEventListener('click', () =>{

    if(start.classList.contains('stst')===false){
      start.classList.add('stst');
      setoButtonSR();
      startTime= Date.now();
      countUp();


    }else if(timer.textContent >='00:00.990' && timer.textContent <='00:01.010'){
        setoButtonSS();
        clearTimeout(timeoutId);
         stopTime += Date.now() - startTime;
         alert('clear!!')
     }else {
      setoButtonSS();
      clearTimeout(timeoutId);
      stopTime += Date.now() - startTime;
      start.classList.remove('stst');

    }
  });


  reset.addEventListener('click', () =>{
    if(reset.classList.contains('disabled') === true){
      return;
    }
    timer.textContent = '00:00.000'
    stopTime = 0;
  });





}
