const showTime = function () {
    let date = new Date();
    let h = date.getHours(); 
    let m = date.getMinutes();
    let s = date.getSeconds();

    h = (h < 10 ? "0" + h : h); //adding 0 if less then 10
    m = (m < 10 ? "0" + m : m);
    s = (s < 10 ? "0" + s : s);

    let time = h + ":" + m + ":" + s;
    
    setTimeout(showTime, 1000); //updates time without reloading site.
    document.getElementById("MyClockDisplay").innerText = time;
}


showTime();