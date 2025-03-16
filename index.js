function time(){
    const now = new Date()
    let hours = now.getHours().toString().padStart(2 ,0);
    let minute = now.getMinutes().toString().padStart(2 ,0);
    let second = now.getSeconds().toString().padStart(2 ,0);
    const timevalue = `${hours}:${minute}:${second}`
    document.getElementById(`clock`).textContent = timevalue
}
setInterval(time, 1000)

const sound1 = new Audio('./sound/Bôa - Duvet (Lyrics) [Ava0duwBsZo].mp3')
const sound2 = new Audio('./sound/JAWNY - Honeypie (Official Video) [Wgw6tJ8yz9M].mp3')
const sound3 = new Audio('./sound/【AKASAKI】Bunny Girl _ バニーガール（Lyric Video） [RCltAg_iK0E].mp3')
sound1.play()
sound1.loop = true

function add1(){
    sound1.play()
    sound1.loop = true
    sound2.pause()
    sound3.pause()
    document.querySelector('.use').classList.remove('use')
    document.querySelector('.o1').classList.add('use')
    document.querySelector('.continer').classList.remove('theme2','theme3')
    document.querySelector('.continer').classList.add('theme1')

}
function add2(){
    sound1.pause()
    sound2.play()
    sound2.loop
    sound3.pause()
    document.querySelector('.use').classList.remove('use')
    document.querySelector('.o2').classList.add('use')
    document.querySelector('.continer').classList.remove('theme1','theme3')
    document.querySelector('.continer').classList.add('theme2')
}
function add3(){
    sound1.pause()
    sound2.pause()
    sound3.play()
    sound3.loop
    document.querySelector('.use').classList.remove('use')
    document.querySelector('.o3').classList.add('use')
    document.querySelector('.continer').classList.remove('theme1','theme2')
    document.querySelector('.continer').classList.add('theme3')
}