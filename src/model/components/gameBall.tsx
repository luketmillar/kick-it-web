import GameValues from 'components/play/gameValues'
import gameValues from 'components/play/gameValues'
import Point from 'model/utils/point'
import Ball from './ball'

export default class GameBall extends Ball {
    constructor(velocity?: Point) {
        super(
            GameValues.ball.color,
            GameValues.ball.size,
            {
                x: gameValues.board.width / 2,
                y: gameValues.board.height / 2,
            },
            velocity
        )
    }
}
