import GameValues from 'components/play/gameValues'
import Point from 'model/utils/point'
import Circle from './circle'

export default class Ball extends Circle {
    private velocity: Point | undefined
    constructor(position: Point, velocity?: Point) {
        super(GameValues.ball.color, GameValues.ball.size, position)
        this.velocity = velocity
    }

    public onFrame(i: number, frameLength: number, duration: number) {
        if (this.velocity === undefined) {
            return
        }
        this.translate({ x: (this.velocity.x * frameLength) / 5, y: (this.velocity.y * frameLength) / 5 })
    }

    public setVelocityDirection(direction: { x?: number; y?: number }) {
        if (this.velocity === undefined) {
            throw new Error('cannot setVelocityDirection when velocity is undefined')
        }
        this.velocity = {
            x: direction.x === undefined ? this.velocity.x : Math.abs(this.velocity.x) * direction.x,
            y: direction.y === undefined ? this.velocity.y : Math.abs(this.velocity.y) * direction.y,
        }
    }

    public setVelocity(velocity: Point) {
        this.velocity = velocity
    }
}
