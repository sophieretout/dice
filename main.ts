function dice_roll () {
    basic.showLeds(`
        # # # # #
        # # . . #
        # . # . #
        # . . # #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        # # . # #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . # . #
        # . . . #
        # # # # #
        `)
    basic.showNumber(randint(1, 6))
}
input.onButtonPressed(Button.A, function () {
    dice_roll()
})
input.onButtonPressed(Button.B, function () {
    dice_roll()
})
input.onGesture(Gesture.Shake, function () {
    dice_roll()
})
basic.forever(function () {
	
})
