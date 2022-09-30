input.onButtonPressed(Button.A, function () {
    if (radio_set == false) {
        position += 1
        position = position % 5
        radio.setGroup(radio_group[position])
        basic.showString("" + (title_screen[position]))
    } else if (input_window == true) {
        position += 1
        position = position % 3
        if (position == 0) {
            basic.clearScreen()
            basic.showLeds(`
                . . . . .
                . # # # .
                . # # # .
                . # # # .
                . . . . .
                `)
        } else if (position == 1) {
            basic.clearScreen()
            basic.showLeds(`
                # # # # #
                # . . . #
                # . . . #
                # . . . #
                # # # # #
                `)
        } else if (position == 2) {
            basic.clearScreen()
            basic.showLeds(`
                # # . . #
                # # . # .
                . . # . .
                # # . # .
                # # . . #
                `)
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("" + (choice[position]))
    input_window = false
    waiting = true
    basic.clearScreen()
})
radio.onReceivedString(function (receivedString) {
    if (waiting == true) {
        waiting = false
        result = true
        if (receivedString == "R") {
            if (position == 0) {
                basic.clearScreen()
                radio.sendString("DRAW")
                basic.showString("DRAW")
            } else if (position == 1) {
                basic.clearScreen()
                radio.sendString("YOU WIN")
                basic.showString("YOU LOSE")
            } else if (position == 2) {
                basic.clearScreen()
                radio.sendString("YOU LOSE")
                basic.showString("YOU WIN")
            }
        } else if (receivedString == "P") {
            if (position == 1) {
                basic.clearScreen()
                radio.sendString("DRAW")
                basic.showString("DRAW")
            } else if (position == 2) {
                basic.clearScreen()
                radio.sendString("YOU WIN")
                basic.showString("YOU LOSE")
            } else if (position == 0) {
                basic.clearScreen()
                radio.sendString("YOU LOSE")
                basic.showString("YOU WIN")
            }
        } else if (receivedString == "S") {
            if (position == 2) {
                basic.clearScreen()
                radio.sendString("DRAW")
                basic.showString("DRAW")
            } else if (position == 0) {
                basic.clearScreen()
                radio.sendString("YOU WIN")
                basic.showString("YOU LOSE")
            } else if (position == 1) {
                basic.clearScreen()
                radio.sendString("YOU LOSE")
                basic.showString("YOU WIN")
            }
        }
    } else if (waiting == false) {
        basic.showString(receivedString)
    }
})
input.onButtonPressed(Button.B, function () {
    if (radio_set == false) {
        radio_set = true
        basic.showIcon(IconNames.Yes)
        basic.clearScreen()
        input_window = true
    }
})
// NOTES FOR NEXT CLASS:
// Setting choices to select either rock paper or scissors then show symbol for players choice
let result = false
let waiting = false
let input_window = false
let choice: string[] = []
let title_screen: string[] = []
let radio_group: number[] = []
let position = 0
let radio_set = false
radio_set = false
position = 0
radio_group = [
202,
203,
204,
205,
206
]
title_screen = [
"GROUP",
"SOLO1",
"SOLO2",
"SOLO3",
"SOLO4"
]
choice = ["R", "P", "S"]
basic.forever(function () {
    while (input_window == true) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
})
