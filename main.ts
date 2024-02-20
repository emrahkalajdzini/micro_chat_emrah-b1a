input.onButtonPressed(Button.A, function () {
    radio.sendString("Hi")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(1)
