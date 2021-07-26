setInterval(()=>
{
    date=new Date();//get current date
    hours=date.getHours();
    minutes=date.getMinutes();
    seconds=date.getSeconds();
    hour_rotation= 30* hours+minutes/2;
    minutes_rotation=6*minutes;
    seconds_rotation=seconds*6;
  
    hour.style.transform=`rotate(${hour_rotation}deg)`
    
    minute.style.transform=`rotate(${minutes_rotation}deg)`
    second.style.transform=`rotate(${seconds_rotation}deg)`
},1000)

