import gameValues from 'components/play/gameValues'
import Bounds from 'model/utils/bounds'
import Rectangle from './rectangle'

export default class Paddle extends Rectangle {
    constructor(height: number, position: any) {
        super(gameValues.player.color, new Bounds({ height, width: gameValues.player.width, ...position }))
        this.borderRadius = 5
    }
}
