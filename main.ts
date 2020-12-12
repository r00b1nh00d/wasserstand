basic.forever(function () {
    if (!(input.pinIsPressed(TouchPin.P0))) {
        basic.setLedColor(0xff0000)
    } else {
        basic.setLedColor(0x00ff00)
    }
})
