import Bounds from 'model/utils/bounds'
import Collisions from 'model/utils/collisions'
import Point from 'model/utils/point'
import React from 'react'

export default abstract class Component {
    public bounds: Bounds
    constructor(bounds: Bounds) {
        this.bounds = bounds
    }

    public setPosition(position: { x?: number; y?: number }) {
        this.bounds = this.bounds.setPosition(
            position.x === undefined ? this.bounds.centerX : position.x,
            position.y === undefined ? this.bounds.centerY : position.y
        )
    }
    public translate(delta: { x?: number; y?: number }) {
        const { x = 0, y = 0 } = delta
        this.bounds = this.bounds.setPosition(this.bounds.centerX + x, this.bounds.centerY + y)
    }

    public setSize(size: Point) {
        this.bounds = this.bounds.setSize(size.x, size.y)
    }

    public abstract draw(): React.ReactNode
    public collision(other: Component): boolean {
        return Collisions.check(this, other)
    }
    public onFrame(i: number, frameLength: number, duration: number, context: any) {
        // do nothing
    }
}
