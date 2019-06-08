import GameValues from 'components/play/gameValues'
import * as math from 'model/utils/math'
import Point from 'model/utils/point'
import Ball from './ball'

const initialPosition = {
    x: GameValues.board.width / 2,
    y: GameValues.board.height / 2,
}

export default class GameBall extends Ball {
    constructor(velocity?: Point) {
        super(GameValues.ball.color, GameValues.ball.size, initialPosition, velocity)
    }

    public reset() {
        this.setVelocity(math.getVelocity(math.randomAngle(), GameValues.ball.speed))
        this.setRadius(GameValues.ball.size)
        this.setPosition(initialPosition)
    }
}
