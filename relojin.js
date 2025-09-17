let seg, min, hora, dia

seg = 0
min = 0
hora = 0
dia = 0

function segundos(){
    seg++
}

function minutos(){
    if (seg==60){
        min++
        seg = 0
    }
}

function horas(){
    if (min==60){
        hora++
        min = 0
    }

}

function dias(){
    if (hora==24){
        dia++
        hora = 0
    }

}
setInterval(() => {
    segundos();
    minutos();
    horas();
    dias();
    console.log(`${hora.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}:${seg.toString().padStart(2, '0')}:${dia.toString().padStart(2, '0')}`);
  }, 1000);