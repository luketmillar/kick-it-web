import gameValues from 'components/play/gameValues'
import Ball from './ball'
import Paddle from './paddle'

export default class Player extends Paddle {
    public readonly isComputer: boolean
    public movementSpeed: number
    constructor(height: number, position: any, isComputer: boolean) {
        super(height, position)
        this.isComputer = isComputer
        this.movementSpeed = 10
    }
    public onFrame(i: number, frameLength: number, duration: number, { ball }) {
        if (this.isComputer) {
            const currentBall = ball as Ball
            this.setPosition({ y: currentBall.y })
        }

        if (this.bounds.top < 0) {
            this.bounds = this.bounds.setTop(0)
        }
        if (this.bounds.bottom > gameValues.board.height) {
            this.bounds = this.bounds.setBottom(gameValues.board.height)
        }
    }

    public grow() {
        this.bounds = this.bounds.setHeight(this.bounds.height * 1.3)
    }

    public shrink() {
        this.bounds = this.bounds.setHeight(this.bounds.height / 1.3)
    }

    public speedUp() {
        this.movementSpeed = this.movementSpeed * 2
    }

    public slowDown() {
        this.movementSpeed = this.movementSpeed / 2
    }
}
