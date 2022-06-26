let load = 0

let int = setInterval(blurring, 20);

function blurring() {
    load++

    if(load > 99){
        clearInterval(int)
    }

    demo.innerHTML = `${load}%`
    demo.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
    
 

}



const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }