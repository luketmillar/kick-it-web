import gameValues from 'components/play/gameValues'
import * as math from 'model/utils/math'
import Point from 'model/utils/point'
import { Player } from '.'
import Ball from './ball'

const RANDOM_PADDING = 200
const getRandomPosition = (): Point => ({
    x: math.random(RANDOM_PADDING / 2, gameValues.board.width - RANDOM_PADDING),
    y: math.random(RANDOM_PADDING / 2, gameValues.board.height - RANDOM_PADDING),
})

export default class EffectBall extends Ball {
    constructor(color: string, radius: number) {
        super(color, radius, getRandomPosition())
    }
    public onHit(gameBall: Ball, playerA: Player, playerB: Player) {
        throw new Error('unimplemented EffectBall.onHit')
    }
}
