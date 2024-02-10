function timer(){
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const day = date.getDay();
    const dAte = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const daytext = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

    let ampm = hours >= 12 ? 'PM' : 'AM';
    let hoursAmPM = ((hours % 12) || 12).toString();
    
    const toggle = document.getElementById('toggle');
    const toggleSecond = document.getElementById('toggleSecond');
    const toggleDay =document.getElementById('toggleDay');
    const toggleNight =document.getElementById('toggleNight');
    const amPm = document.querySelector('.pmam');
    const hoursAmPmElem = document.querySelector('.hoursAmPm');
    const hoursElem = document.querySelector('.hours');
    const minuteElem = document.querySelector('.minute');
    const secondElem = document.querySelector('.second');
    const dayElem = document.querySelector('.day');

    toggle.addEventListener('change', function() {
        amPm.style.opacity = this.checked ? '1' : '0';
        hoursAmPmElem.style.display = this.checked ? "block" : "none";
        hoursElem.style.display = this.checked ? "none" : "block";
        amPm.innerHTML = this.checked ? ampm : '';
    });

    toggleSecond.addEventListener('change', function(){
        amPm.style.fontSize = this.checked ? '3vw' : '10vw';
        secondElem.style.display = this.checked ? 'block' : 'none';
    });

    document.querySelector('.box2').style.display = !toggle.checked && !toggleSecond.checked ? 'none' : 'block';
    toggleDay.addEventListener('change', function(){
        dayElem.style.display = this.checked ? 'block' : 'none';
    })

    toggleNight.addEventListener('change', function(){
        document.body.style.color = this.checked ? '#ffffff' : '#111111';
        document.body.style.background = this.checked ? '#111111' : '#ffffff';
    })

    hoursAmPmElem.innerHTML = hoursAmPM.padStart(2, '0');
    hoursElem.innerHTML = hours.toString().padStart(2, '0');
    minuteElem.innerHTML = minutes.toString().padStart(2, '0');
    secondElem.innerHTML = seconds.toString().padStart(2, '0');
    dayElem.innerHTML = daytext[day]+', '+dAte+' / '+monthNames[month]+' / '+year ;

    document.title = `${hours}:${minutes}:${seconds}`;
}

setInterval(timer, 1000);

document.addEventListener("contextmenu", function(e){
    e.preventDefault();
}, false);

function toggleFullscreen() {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        document.documentElement.requestFullscreen();
    }
}