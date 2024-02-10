function timer(){
    let date = new Date();
    let hours = date.getHours();
    let hoursAmPM = date.getHours();
    let minute = date.getMinutes();
    let seconds = date.getSeconds();
    let day = date.getDay();
    let dAte = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let daytext = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    let monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

    let ampm = hoursAmPM >= 12 ? 'PM' : 'AM';
    hoursAmPM = hoursAmPM % 12;
    hoursAmPM = hoursAmPM ? hoursAmPM : 12;

    let hoursStr = hours.toString();
    let hoursLht = hoursStr.length;
    let hoursAmPmStr = hoursAmPM.toString();
    let hoursAmPmLht = hoursAmPmStr.length;
    let minuteStr = minute.toString();
    let minuteLht = minuteStr.length;
    let secondStr = seconds.toString();
    let secondLth = secondStr.length;
    
    const toggle = document.getElementById('toggle');
    const toggleSecond = document.getElementById('toggleSecond');
    const toggleDay =document.getElementById('toggleDay');
    const toggleNight =document.getElementById('toggleNight');
    const amPm = document.querySelector('.pmam');
    

    toggle.addEventListener('change', function() {
        if (this.checked) {
        amPm.style.opacity = '1';
        document.querySelector('.hoursAmPm').style.display = "block";
        document.querySelector('.hours').style.display = "none";
        document.querySelector('.box2').style.display='block';
        document.querySelector('.pmam').innerHTML = ampm ;
    } else {
        amPm.style.opacity = '0';
        document.querySelector('.hours').style.display = "block";
        document.querySelector('.hoursAmPm').style.display = "none";
        }
    });

    toggleSecond.addEventListener('change', function(){
        if(this.checked){
            document.querySelector('.second').style.display='block';
            document.querySelector('.box2').style.display ='block';
            amPm.style.fontSize='3vw';
        }else{
            amPm.style.fontSize='10vw';
            document.querySelector('.second').style.display='none';
        }
    });

    if(!toggle.checked && !toggleSecond.checked){
        document.querySelector('.box2').style.display='none';
    }

    toggleDay.addEventListener('change', function(){
        if(this.checked){
            document.querySelector('.day').style.display='block';
        }else{
            document.querySelector('.day').style.display='none';
        }
    })

    toggleNight.addEventListener('change', function(){
        if(this.checked){
            document.body.style.color = '#ffffff';
            document.body.style.background = '#111111';
        }else{
            document.body.style.backgroundColor = '#fff'
            document.body.style.color = '#111111';
        }
    })

    document.querySelector('.hoursAmPm').innerHTML = hoursAmPmLht == '1' ? '0' + hoursAmPM : hoursAmPM; 
    document.querySelector('.hours').innerHTML = hoursLht == '1' ? '0' + hours : hours; 
    document.querySelector('.minute').innerHTML = minuteLht == '1' ? '0' + minute : minute;
    document.querySelector('.second').innerHTML = secondLth == '1' ? '0' + seconds : seconds;
    document.querySelector('.day').innerHTML = daytext[day]+', '+dAte+' / '+monthNames[month]+' / '+year ;

    document.title = hours + ':' + minute + ':' +seconds;

}
setInterval(timer,1000);
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