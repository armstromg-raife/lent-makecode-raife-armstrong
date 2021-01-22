controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (controller.B.isPressed()) {
        tiles.placeOnRandomTile(myCorg.sprite, sprites.dungeon.darkGroundCenter)
    } else {
        tiles.placeOnRandomTile(myCorg.sprite, sprites.castle.tileGrass2)
    }
})
let myCorg: Corgio = null
scene.setBackgroundColor(7)
myCorg = corgio.create(SpriteKind.Player)
myCorg.updateSprite()
myCorg.verticalMovement()
myCorg.verticalMovement()
myCorg.horizontalMovement()
myCorg.follow()
tiles.setTilemap(tiles.createTilemap(hex`33000800060000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005000000000000000000000000000000000000000000000300000300000300000300030000030000000300000003000000000305000000000000000000000000000000000000000000000300000300000300000300030000030000000300000003000000000305000000000000000000000000000000000000000000030303030300000300000300030000030000000300000003000000000305000000000000000000000000000000000000000000000000000300000300000300030000030000000300000003000000000305000000000000000000000000000000000000000300000000000303030303030303030303030303030303030303030303030305000000000000000000030000000000000000000300000000000000000000000000000000000000000000000000000000000005020101010101010104030201010101010101040302010101010101010101010101010101010101010101010101010101010105`, img`
    ...................................................
    ......................2..2..2..2.2..2...2...2....2.
    ......................2..2..2..2.2..2...2...2....2.
    .....................22222..2..2.2..2...2...2....2.
    .........................2..2..2.2..2...2...2....2.
    ...................2.....2222222222222222222222222.
    .........2.........2..........2....................
    .........2.........2...........2...................
    `, [myTiles.transparency16,sprites.castle.tilePath8,sprites.castle.tilePath7,sprites.builtin.forestTiles0,sprites.castle.tilePath9,sprites.dungeon.darkGroundCenter,sprites.castle.tileGrass2], TileScale.Sixteen))
