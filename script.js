const WHITE_KEYS = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', 'm', ',', '.', '/']
const BLACK_KEYS = ['w', 'e','t','y', 'u', 'o', 'p', 'v', 'b', 'n']
const twinkle = ["c", "c", "g", "g", "a", "a", "g", "f", "f", "e", "e", "d", "d", "c", "g", "g", "f", "f", "e", "e", "d", "g", "g", "f", "f", "e", "e", "d", "c", "c", "g", "g", "a", "a", "g", "f", "f", "e", "e", "d", "d", "c"]
const yankee = ["c", "c", "d", "e", "c", "d", "g", "c", "c", "d", "e", "c", "b", "g", "c", "c", "d", "e", "f", "e", "d", "c", "b", "g", "a", "b", "c", "c", "a", "b", "a", "g", "a", "b", "c", "g", "a", "g", "f", "e", "g", "a", "b", "a", "g", "a", "b", "c", "a", "g", "c", "b", "d", "c", "c"]
const happybirthday = ["g", "g", "a", "g", "c", "b", "g", "g", "a", "g", "d", "c", "g", "g", "g", "e", "c", "b", "a", "f", "f", "e", "c", "d", "c"]
const twinkleLyrics = "CC GG AA G -- FF EE DD C -- GG FF EE D -- GG FF EE D -- CC GG AA G -- FF EE DD C"
const happyLyrics = "G GA GC B -- G G AG DC -- GGG E C B A -- F FE C D C"
const yankeeLyrics = "CC D E C E D -- GC C D E C B -- G  C C D E F E D -- C  B G A BCC -- AB A G A BC -- GA  G F EG -- A BAGABC -- A G C BD CC"


const keys = document.querySelectorAll(".key")
const wkeys = document.querySelectorAll(".white")
const bkeys = document.querySelectorAll(".black")
const play = document.getElementById("play")
const stopp = document.getElementById("stop")
const lyrics = document.getElementById("songLyrics")
const played = []
const songs = document.getElementById("songs")
var currentSong;



play.addEventListener('click', e => {
    e.preventDefault()
    played.length = 0
    const text = songs.options[songs.selectedIndex].text;
    switch(text) {
        case 'Happy Birthday':
          lyrics.innerHTML = happyLyrics;
          currentSong = happybirthday;
          break;
        case 'Twinkle Twinkle':
            lyrics.innerHTML = twinkleLyrics;
            currentSong = twinkle;
          break;
        case 'Yankee Doodle':
            lyrics.innerHTML = yankeeLyrics;
            currentSong = yankee;
        break;
        default:
      }
    document.getElementById("result").innerHTML = ''
})

stopp.addEventListener('click', e => {
if (JSON.stringify(played) == JSON.stringify(currentSong)){
    return window.alert('Well done!')
   
}
return window.alert('You better train harder... ')
})

keys.forEach(key => {
    key.addEventListener('click', () => playNote(key))
})

document.addEventListener('keydown', e => {
    if(e.repeat) return
    const key = e.key
    const whiteKeyIndex = WHITE_KEYS.indexOf(key)
    const blackKeyIndex = BLACK_KEYS.indexOf(key)

    if(whiteKeyIndex > -1) playNote(wkeys[whiteKeyIndex])
    if(blackKeyIndex > -1) playNote(bkeys[blackKeyIndex])
})

function playNote(key){
    const audio = document.getElementById(key.dataset.note)
    audio.currentTime = 0;
    audio.play()
    played.push(key.dataset.note)
    key.classList.add('active')
    setTimeout( function(){
        audio.pause()
        key.classList.remove('active')
    }, 1000)
}


