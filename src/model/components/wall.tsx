import gameValues from 'components/play/gameValues'
import Bounds from 'model/utils/bounds'
import Rectangle from './rectangle'

export class BottomWall extends Rectangle {
    constructor() {
        super('', new Bounds({ width: gameValues.board.width, height: 10, left: 0, top: gameValues.board.height }))
    }
}

export class TopWall extends Rectangle {
    constructor() {
        super('', new Bounds({ width: gameValues.board.width, height: 10, left: 0, bottom: 0 }))
    }
}

export class RightWall extends Rectangle {
    constructor() {
        super('', new Bounds({ width: 10, height: gameValues.board.height, left: gameValues.board.width, top: 0 }))
    }
}

export class LeftWall extends Rectangle {
    constructor() {
        super('', new Bounds({ width: 10, height: gameValues.board.height, right: 0, top: 0 }))
    }
}
