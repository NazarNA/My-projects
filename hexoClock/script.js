let clock = document.getElementById('clock');
let color = document.getElementById('color');

function hexoClock() {
    let time = new Date();
    let h = (time.getHours() % 12).toString();
    let m = time.getMinutes().toString();
    let s = time.getSeconds().toString();

    if(h.length < 2){
        h = '0' + h
    };

        if(m.length < 2){
        m = '0' + m
    };

        if(s.length < 2){
        s = '0' + s
    };

    let clockString = `${h} : ${m} : ${s}`;
    let colorString = `#${h}${m}${s}`;

    clock.innerText = clockString;
    color.innerText = colorString; 

    document.body.style.background = colorString;
};

hexoClock();

setInterval(hexoClock,1000)