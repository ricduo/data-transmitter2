radio.setGroup(22)
basic.forever(function () {
    radio.sendValue("x", input.acceleration(Dimension.X))
    radio.sendValue("y", input.acceleration(Dimension.Y))
    radio.sendValue("z", input.acceleration(Dimension.Z))
    basic.showIcon(IconNames.Yes)
})
