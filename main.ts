input.onGesture(Gesture.Shake, function () {
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
})
basic.forever(function () {
	
})
