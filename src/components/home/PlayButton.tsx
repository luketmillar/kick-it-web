import React, { MouseEventHandler } from 'react'
import PlayIcon from 'components/icons/play'
import Style from 'styles'
import useInteraction from 'hooks/useInteraction'

const colors = {
    default: Style.color.button.default,
    hover: Style.color.button.hover,
    down: Style.color.button.down
}

const styles = {
    cursor: 'pointer',
}

const hoverStyles = {
    transform: 'rotate(120deg)'
}

interface IProps {
    onClick?: MouseEventHandler
}

const PlayButton = ({ onClick }: IProps) => {
    const [isHovered, isDown, ref] = useInteraction()
    return (
        <div style={styles} ref={ref} onClick={onClick}>
            <PlayIcon style={{transition: 'transform 200ms ease', ...(( isHovered || isDown ) && hoverStyles)}} color={isHovered ? colors.hover : isDown ? colors.down : colors.default} />
        </div>
    )
}

export default PlayButton