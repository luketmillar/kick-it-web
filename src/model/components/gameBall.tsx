import GameValues from 'components/play/gameValues'
import gameValues from 'components/play/gameValues'
import Point from 'model/utils/point'
import Ball from './ball'

const initialPosition = {
    x: gameValues.board.width / 2,
    y: gameValues.board.height / 2,
}

export default class GameBall extends Ball {
    constructor(velocity?: Point) {
        super(GameValues.ball.color, GameValues.ball.size, initialPosition, velocity)
    }

    public reset() {
        const angle = ((Math.random() * 45 + 22) * Math.PI) / 180
        this.setVelocity({
            x: gameValues.ball.speed * Math.cos(angle),
            y: gameValues.ball.speed * Math.sin(angle),
        })
        this.setRadius(GameValues.ball.size)
        this.setPosition(initialPosition)
    }
}
