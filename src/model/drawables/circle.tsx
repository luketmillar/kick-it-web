import Bounds from 'model/utils/bounds'
import React from 'react'

interface ICircleProps {
    color: string
    bounds: Bounds
}
const Circle = ({ color, bounds }: ICircleProps) => (
    <div
        style={{
            position: 'absolute',
            width: bounds.width,
            height: bounds.height,
            borderRadius: bounds.width,
            backgroundColor: color,
            top: bounds.top,
            left: bounds.left,
        }}
    />
)

export default Circle
