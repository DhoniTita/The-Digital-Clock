function time(){
    const now = new Date()
    let hours = now.getHours().toString().padStart(2 ,0);
    let minute = now.getMinutes().toString().padStart(2 ,0);
    let second = now.getSeconds().toString().padStart(2 ,0);
    const timevalue = `${hours}:${minute}:${second}`
    document.getElementById(`clock`).textContent = timevalue
}
setInterval(time, 1000)

const sound1 = new Audio
sound1.src = './sound/Bôa - Duvet (Lyrics) [Ava0duwBsZo].mp3'
sound1.loop = true
sound1.play()

const sound2 = new Audio
sound2.src = './sound/JAWNY - Honeypie (Official Video) [Wgw6tJ8yz9M].mp3'
sound2.loop = true

const sound3 = new Audio
sound3.src = './sound/【AKASAKI】Bunny Girl _ バニーガール（Lyric Video） [RCltAg_iK0E].mp3'
sound3.loop = true

function add1(){
    sound1.play()
    sound2.pause()
    sound3.pause()
    document.querySelector('.use').classList.remove('use')
    document.querySelector('.o1').classList.add('use')
}

function add2(){
    sound1.pause()
    sound2.play()
    sound3.pause()
    document.querySelector('.use').classList.remove('use')
    document.querySelector('.o2').classList.add('use')
}

function add3(){
    sound1.pause()
    sound2.pause()
    sound3.play()
    document.querySelector('.use').classList.remove('use')
    document.querySelector('.o3').classList.add('use')
}