function format(date){
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let meridiem = hours >= 12 ? 'PM' : 'AM';

   hours = hours<12 ? '0'+hours : hours;
   minutes = minutes<10 ? '0'+minutes : minutes;
   seconds = seconds<10 ? '0'+seconds : seconds;
  return `${hours}:${minutes}:${seconds} ${meridiem}`
}


function timeDedeBhai(){
    const currenTime = new Date();
    const time = format(currenTime);

    console.log(time)
}


setInterval(timeDedeBhai , 1000)