var i = -1 
let playlist = [
    {"url":"img/Campus-15-Foto-Marcos-Santos20101220_066.jpg","Musica": "Muito Cedo", "Artista": "Turma do Pagode"},
    {"url":"img/download (1).jpg","Musica": "amiga da minha mulher", "Artista": "Jorge aragão"},
    {"url":"img/download (2).jpg","Musica": "amiga da minha mulher", "Artista": "Jorge aragão"},
    {"url":"img/download.jpg","Musica": "amiga da minha mulher", "Artista": "Jorge aragão"}]

function incrementa(){
    i++ 
    return i
    }
function decrementa(){
    i-- 
    return i
    }

function back_music(){
    if(i != 0){
        let el = document.querySelector("#imagem")
        let music = document.querySelector("#music-artista")
        console.log(music)
        el.setAttribute('src',playlist[decrementa()].url)
    console.log(i)
    }
    
}

function skip_music(){
    if(i < playlist.length ){
        let el = document.querySelector("#imagem")
        el.setAttribute('src',playlist[incrementa()].url)
        
    }
}

function pause_play(){
    let el = document.querySelector("#pause-play")
    if(el.classList.contains('pause') == true){
        el.classList.toggle('pause')
        el.setAttribute('src','/img/play_circle_FILL1_wght700_GRAD0_opsz48.svg')
    }
    else{
        el.classList.toggle('pause')
        el.setAttribute('src','/img/pause_circle_FILL1_wght700_GRAD200_opsz48.svg')
    }
    console.log(el)
}
    
