input.onPinReleased(TouchPin.P0, function () {
    control.reset()
})
let BotãoNãoPressionado = true
basic.forever(function () {
    while (BotãoNãoPressionado) {
        if (input.pinIsPressed(TouchPin.P1)) {
            basic.showString("Hello!")
            music.ringTone(262)
            BotãoNãoPressionado = false
        } else if (input.pinIsPressed(TouchPin.P2)) {
            basic.showString("Hello!")
            music.ringTone(523)
            BotãoNãoPressionado = false
        }
    }
})
