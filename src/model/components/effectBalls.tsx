import * as math from 'model/utils/math'
import { Player } from '.'
import Ball from './ball'
import EffectBall from './effectBall'

export class GrowEffect extends EffectBall {
    constructor() {
        super('black', 25)
    }
    public onHit(gameBall: Ball, playerA: Player, playerB: Player) {
        gameBall.setRadius(gameBall.radius * 2)
    }
}

export class ShrinkEffect extends EffectBall {
    constructor() {
        super('red', 5)
    }
    public onHit(gameBall: Ball, playerA: Player, playerB: Player) {
        gameBall.setRadius(gameBall.radius / 2)
    }
}

export class SpeedUpEffect extends EffectBall {
    constructor() {
        super('teal', 15)
    }
    public onHit(gameBall: Ball, playerA: Player, playerB: Player) {
        const velocity = gameBall.getVelocity()
        gameBall.setVelocity({ x: velocity.x * 1.2, y: velocity.y * 1.2 })
    }
}

export class SlowDownEffect extends EffectBall {
    constructor() {
        super('orange', 15)
    }
    public onHit(gameBall: Ball, playerA: Player, playerB: Player) {
        const velocity = gameBall.getVelocity()
        gameBall.setVelocity({ x: velocity.x / 1.2, y: velocity.y / 1.2 })
    }
}

export const createRandomEffect = (): EffectBall => {
    switch (math.random(0, 3)) {
        case 0:
            return new GrowEffect()
        case 1:
            return new ShrinkEffect()
        case 2:
            return new SpeedUpEffect()
        case 3:
        default:
            return new SlowDownEffect()
    }
}
