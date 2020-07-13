let Temperature = input.temperature()

basic.forever(function () {
    basic.pause(3000)
    Temperature = input.temperature()
})


input.onButtonPressed(Button.A, function () {
    basic.showNumber(Temperature)
    basic.showString("Degrees C")
})