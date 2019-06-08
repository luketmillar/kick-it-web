import Bounds from 'model/utils/bounds'
import React from 'react'

interface IWrapperProps {
    bounds: Bounds
    children: React.ReactNode
}
const Wrapper = ({ bounds, children }: IWrapperProps) => (
    <div
        style={{
            position: 'absolute',
            width: bounds.width,
            height: bounds.height,
            top: bounds.top,
            left: bounds.left,
        }}
    >
        {children}
    </div>
)

export default Wrapper
