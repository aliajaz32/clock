function startTime1(){
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    if (h<12){
        today = "am"
    }
    else{
        today="pm";
    }
    document.getElementById('text').innerHTML=   h  + " : "+ m +" : "+ s+" , "+today;
    var t = setTimeout(startTime1,500);
}
function checkTime(i){
    if (i < 10)  { 
        i= "0"+i;
    }
    return i ;  
}
