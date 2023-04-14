let endDate = document.getElementById("date1");
final_Date = "6 February 2023 11:58:00 PM ";
endDate.innerHTML = final_Date ;

const clock = () => {

    const end = new Date(final_Date);
    let now = new Date();

    // console.log(end);
    // console.log(now);
   
    // console.log(end - now)
    let diff = ((end - now) / 1000 )
    // console.log(diff)

    if(diff < 0){

       return ;
    }
    
    // FOR DAYS...
    let days = document.getElementsByClassName("innerdiv")[0].firstElementChild;
    // console.log(days)
    days.value = Math.floor(diff / 3600 / 24)
    
    // FOR Hours...
    let hours = document.getElementsByClassName("innerdiv")[1].firstElementChild;
    hour_with_minutes = Math.floor(diff  / 3600 % 24);
    hours.value = hour_with_minutes;
    // for Minutes...
    
    let Minutes = document.getElementsByClassName("innerdiv")[2].firstElementChild;
    Minutes.value = Math.floor(diff  / 60) % 60;
    // console.log(Math.floor(diff / 60))
    //  For Seconds...

    let seconds =  document.getElementsByClassName("innerdiv")[3].firstElementChild;
    seconds.value = Math.floor(diff  % 60) 


  
    
}

// Initial Call...

clock()

// Interval calling...


let ID = setInterval(() => {
    
    clock()
}, 1000);


