import Point from 'model/utils/point'
import Circle from './circle'

export default class Ball extends Circle {
    private velocity: Point | undefined
    constructor(color: string, radius: number, position: Point, velocity?: Point) {
        super(color, radius, position)
        this.velocity = velocity
    }

    public onFrame(i: number, frameLength: number, duration: number) {
        if (this.velocity === undefined) {
            return
        }
        this.translate({ x: (this.velocity.x * frameLength) / 4, y: (this.velocity.y * frameLength) / 4 })
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

    public getVelocity(): Point {
        if (this.velocity === undefined) {
            throw new Error('unexpected velocity to be undefined')
        }
        return this.velocity
    }

    public setVelocity(velocity: Point) {
        this.velocity = velocity
    }

    public setRadius(radius: number) {
        this.setSize({ x: radius * 2, y: radius * 2 })
    }

    public grow() {
        this.setRadius(this.radius * 2)
    }

    public shrink() {
        this.setRadius(this.radius / 2)
    }

    public speedUp() {
        if (this.velocity === undefined) {
            throw new Error('cannot speed up a ball with no velocity')
        }
        this.setVelocity({ x: this.velocity.x * 1.2, y: this.velocity.y * 1.2 })
    }

    public slowDown() {
        if (this.velocity === undefined) {
            throw new Error('cannot slow down a ball with no velocity')
        }
        this.setVelocity({ x: this.velocity.x / 1.2, y: this.velocity.y / 1.2 })
    }
}
