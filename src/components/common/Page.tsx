import React, { ReactNode } from 'react'
import Styles from 'styles'

const styles = {
    backgroundColor: Styles.color.purple,
    fontFamily: Styles.type.family.primary,
    color: Styles.color.text.primary,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
} as const

interface IProps {
    children: ReactNode
    style?: React.CSSProperties
}

export default ({ children, style }: IProps) => <div style={{ ...styles, ...style }}>{children}</div>
