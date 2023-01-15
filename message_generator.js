const musicLyrics = ["I’ll tell you what I want, what I really really want, So tell me what you want, what you really really want, I wanna, I wanna, I wanna, I wanna, I wanna really really really wanna zigazig ha - Spice Girls", 
"Hello - Lionel Richie", 
"You Had Me from Hello - Kenny Chesney", 
"Do you ever feel like a plastic bag? - Katy Perry", 
"Yes, I like piña coladas, And gettin' caught in the rain. I'm not much into health food, I am into champagne - Rupert Holmes",
"Why you gotta be so rude? Don’t you know I’m human too? Why you gotta be so rude? I’m gonna marry her anyway. - Magic",
"I'm friends with the monster that's under my bed. - Eminem & Rhianna", 
"Before you came into my life, I missed you so bad. - Carly Rae Jepsen",
"You say ‘black’ I say ‘white’ You say ‘bark’ I say ‘bite’ You say ‘shark’ I say ‘hey man ‘Jaws’ was never my scene! - Queen",
"Clap along if you feel like a room without a roof. - Pharrell"]

const generator = topic => {
    i = Math.floor(Math.random()*10);
    return topic[i]
}

console.log(generator(musicLyrics));