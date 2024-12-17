
let intervalId;
function getVal(){
    const givendate = document.getElementById('date').value;
    

    // console.log("Given Date -",givendate);
    const [date, time] = givendate.split("T"); 
    //console.log("Date:", date); 
    //console.log("Time:", time);

    

    const inputdate = new Date(`${date}T${time}:00Z`);
    console.log("Given Date",inputdate);

     const inputtimestamp = inputdate.getTime();

     const timestamp=5.5 * 60 * 60000;

     const chooseddatetimestamp = inputtimestamp-timestamp;
    console.log(chooseddatetimestamp);
    

    
    const currentDate = new Date();
    console.log("Current date", currentDate);
   

   


    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2,'0');
    const day = String(currentDate.getDate()).padStart(2,'0');
    const formattedDate = `${year}-${month}-${day}`;

   // console.log("formatted Date" , formattedDate)

    //const utcTime = currentDate.getTime() + (currentDate.getTimezoneOffset() * 60000); 
    
     
   //const istTime = new Date(utcTime + (5.5 * 60 * 60000)); 
  // console.log("ist",istTime);


   const hours = currentDate.getHours(); // Get hours in 24-hour format (0-23)
    const minutes = currentDate.getMinutes();
    const formattedTime = `${hours}:${String(minutes).padStart(2, '0')}`;
    
   // const hours = String(istTime.getHours()).padStart(2, '0'); 
   // const minutes = String(istTime.getMinutes()).padStart(2, '0'); 
    //const formattedTime = `${hours}:${minutes}`; 
   // console.log("Railway Time (IST):", formattedTime);



    
   // const hours = String(currentDate.getHours()).padStart(2, '0');
   // const minutes = String(currentDate.getMinutes()).padStart(2, '0');

    //const formattedTime = `${hours}:${minutes}`;

    //console.log("Formatted Time:", formattedTime);

    


    if (!date&&!time){
    alert("Choose Date and Time")

    }

    else if (date < formattedDate){
        alert("Choose a Date ahead")
    }

    else if (date >= formattedDate&&time< formattedTime){
        alert("Choose a Time ahead")}

     else  {  


        intervalId= setInterval(() => {

        const currenttimestamp = new Date().getTime();
        //console.log("Current date", currentDate);
        //const currenttimestamp = currentDate.getTime();
        console.log(currenttimestamp);


    
    const diffDate = (chooseddatetimestamp - currenttimestamp);
    //console.log("difference in milliseconds",diffDate);
    
    const msg=document.getElementById("message");


    if (diffDate <= 0) {
        updateDisplay(0, 0, 0, 0);
        msg.classList.add('anim');
        msg.textContent="Time's Up.. Goal's Met" ;

        
        clearInterval(intervalId);
        
        
       

        return;
         // Stop the interval
    }
    

    
    const days = Math.floor(diffDate / (1000 * 60 * 60 * 24));
    console.log('Days-',days);
   

    const hour  = Math.floor((diffDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    console.log('Hours-',hour);

    const min = Math.floor((diffDate % (1000 * 60 * 60)) / (1000 * 60));
    console.log('Minutes-',min);

    const sec = Math.floor((diffDate % (1000 * 60)) / 1000);
    console.log('Seconds-',sec);

    updateDisplay(days,hour,min,sec);
},1000)



     
   
     }
} 

function updateDisplay(days,hour,min,sec){

    const countdays = document.getElementById('countdays');
    const counthours = document.getElementById('counthours');
    const countminutes = document.getElementById('countminutes');
    const countseconds= document.getElementById('countseconds');


 countdays.textContent = days.toString().padStart(2,"0");

 counthours.textContent = hour.toString().padStart(2,"0");
 
 countminutes.textContent = min.toString().padStart(2,"0");
 
 countseconds.textContent = sec.toString().padStart(2,"0");

    

 

}

function resetbtn(){
    clearInterval(intervalId);
    countdays.textContent = "00" ;

 counthours.textContent ="00" ;
 
 countminutes.textContent = "00" ;
 countseconds.textContent = "00" ;

 const rem=document.getElementById("message");

 rem.classList.remove('anim');
 rem.textContent="Time Remaining....";
}

