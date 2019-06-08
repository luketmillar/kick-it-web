import Bounds from 'model/utils/bounds'
import React from 'react'

interface IRectangleProps {
    color: string
    bounds: Bounds
}
const Rectangle = ({ color, bounds }: IRectangleProps) => (
    <div
        style={{
            position: 'absolute',
            width: bounds.width,
            height: bounds.height,
            backgroundColor: color,
            top: bounds.top,
            left: bounds.left,
        }}
    />
)

export default Rectangle
