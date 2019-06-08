import gameValues from 'components/play/gameValues'
import Drawables from 'model/drawables'
import * as math from 'model/utils/math'
import Point from 'model/utils/point'
import React from 'react'
import { Player } from '.'
import Ball from './ball'

const RANDOM_PADDING = 200
const getRandomPosition = (): Point => ({
    x: math.random(RANDOM_PADDING / 2, gameValues.board.width - RANDOM_PADDING),
    y: math.random(RANDOM_PADDING / 2, gameValues.board.height - RANDOM_PADDING),
})

const getRandomVelocity = () => math.getVelocity(math.randomAngle(0, 360), math.randomSpeed(0.25, 1))

export default abstract class EffectBall extends Ball {
    constructor() {
        super('', 30, getRandomPosition(), getRandomVelocity())
    }
    public onHit(item: Ball | Player) {
        throw new Error('unimplemented EffectBall.onHit')
    }
    public draw() {
        return (
            <Drawables.Wrapper bounds={this.bounds}>
                <svg
                    width={this.diameter}
                    height={this.diameter}
                    viewBox="0 0 73 73"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {this.svgContents()}
                </svg>
            </Drawables.Wrapper>
        )
    }
    public abstract svgContents(): React.ReactNode
}
