import Bounds from 'model/utils/bounds'
import React from 'react'
import Drawables from '../drawables'
import Component from './component'

export default class Rectangle extends Component {
    public color: string
    constructor(color: string, bounds: Bounds) {
        super(bounds)
        this.color = color
    }
    public draw(): React.ReactNode {
        return <Drawables.Rectangle color={this.color} bounds={this.bounds} />
    }
}
