import Bounds from 'model/utils/bounds'
import Point from 'model/utils/point'
import React from 'react'
import Drawables from '../drawables'
import Component from './component'

export default class Circle extends Component {
    public color: string
    constructor(color: string, radius: number, position: Point) {
        super(new Bounds({ width: radius * 2, height: radius * 2, centerX: position.x, centerY: position.y }))
        this.color = color
    }
    public draw(): React.ReactNode {
        return <Drawables.Circle color={this.color} bounds={this.bounds} />
    }
    public get position(): Point {
        return { x: this.bounds.centerX, y: this.bounds.centerY }
    }
    public get x(): number {
        return this.position.x
    }
    public get y(): number {
        return this.position.y
    }
    public get radius(): number {
        return this.diameter / 2
    }
    public get diameter(): number {
        return this.bounds.width
    }
}
