import Bounds from 'model/utils/bounds'
import React from 'react'
import Drawables from '../drawables'
import Component from './component'

export default class Rectangle extends Component {
    public color: string
    public borderRadius: number
    constructor(color: string, bounds: Bounds) {
        super(bounds)
        this.color = color
        this.borderRadius = 0
    }
    public draw(): React.ReactNode {
        return <Drawables.Rectangle borderRadius={this.borderRadius} color={this.color} bounds={this.bounds} />
    }
}
