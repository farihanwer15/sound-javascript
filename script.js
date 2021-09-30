var sounds = ['applause' , 'music1' , 'music2' , 'music3' , 'music4', 'music5']

sounds.forEach(sound => {
    var btn = document.createElement('buttons')
    btn.classList.add('btn')

    btn.innerText = sound

    btn.addEventListener('click' , () => {
        stop()

        document.getElementById(sound).play()
    })
    document.getElementById('buttons').appendChild(btn)

})

function stop(){
    sounds.forEach(sound => {
        var song = document.getElementById(sounds)

        song.pause()
        song.currentTime = 0;
    })
}