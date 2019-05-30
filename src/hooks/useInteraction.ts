import React from 'react'
import useDown from './useDown'
import useHover from './useHover'

const useInteraction = (ref = React.useRef<HTMLElement>()) => {
    const [isHovered] = useHover(ref)
    const [isDown] = useDown(ref)
    return [isHovered && !isDown, isHovered && isDown, ref]
}

export default useInteraction
