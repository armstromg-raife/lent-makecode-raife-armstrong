controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (controller.B.isPressed()) {
        tiles.placeOnRandomTile(myCorg.sprite, sprites.dungeon.darkGroundCenter)
    } else {
        tiles.placeOnRandomTile(myCorg.sprite, sprites.castle.tileGrass2)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.darkGroundCenter, function (sprite, location) {
    pause(100)
    info.changeScoreBy(1)
    game.showLongText("next level", DialogLayout.Center)
    pause(100)
    tiles.placeOnRandomTile(myCorg.sprite, sprites.castle.tileGrass2)
})
let myCorg: Corgio = null
scene.setBackgroundColor(7)
tiles.setTilemap(tilemap`level1`)
myCorg = corgio.create(SpriteKind.Player)
myCorg.updateSprite()
myCorg.verticalMovement()
myCorg.horizontalMovement()
myCorg.follow()
game.showLongText("a to restart", DialogLayout.Center)
forever(function () {
    if (info.score() == 1) {
        tiles.setTilemap(tilemap`level2`)
    } else if (info.score() == 2) {
        tiles.setTilemap(tilemap`level6`)
    } else if (info.score() == 3) {
    	
    } else {
    	
    }
})
