import Bounds from 'model/utils/bounds'
import React from 'react'

interface IRectangleProps {
    color: string
    bounds: Bounds
    borderRadius: number
}
const Rectangle = ({ color, bounds, borderRadius }: IRectangleProps) => (
    <div
        style={{
            position: 'absolute',
            width: bounds.width,
            height: bounds.height,
            backgroundColor: color,
            top: bounds.top,
            left: bounds.left,
            borderRadius,
        }}
    />
)

export default Rectangle
