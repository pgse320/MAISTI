let mili, seg, min
mili = 0
seg = 0
min = 0


function milisegundos(){
    mili++

}
    

function segundos(){
    seg++
}

function minutos(){
    if (seg==60){
        min++
        seg = 0
    }
    
    if (seg==1){
        mili==0
    }
    


}



setInterval(() => {
    milisegundos();
    segundos();
    minutos();
    console.log(`${mili.toString().padStart(2, '0')}:${seg.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}`);
  }, 1000);