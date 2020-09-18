input.onGesture(Gesture.Shake, function () {
    while (!(input.buttonIsPressed(Button.A))) {
        music.playTone(262, music.beat(BeatFraction.Half))
        music.playTone(523, music.beat(BeatFraction.Half))
    }
})
let Xvalue = 0
let Yvalue = 0
basic.forever(function () {
    for (let Yvalue = 0; Yvalue <= 4; Yvalue++) {
        for (let Xvalue = 0; Xvalue <= 4; Xvalue++) {
            led.plot(Xvalue, 0)
            basic.pause(100)
            led.unplot(Xvalue, 0)
            basic.pause(100)
        }
    }
})
