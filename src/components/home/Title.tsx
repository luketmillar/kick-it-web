import React from "react"
import Style from 'styles'

const styles = {
    common: {
        fontFamily: Style.type.family.header,
        color: Style.color.white,
        textTransform: 'uppercase',
        fontSize: 200,
        display: 'inline-block',
        userSelect: 'none',
    } as const,
    kick: {
        fontWeight: 800
    },
    it: {
        fontWeight: 300,
    }
}

export default () => <div style={styles.common}><span style={styles.kick}>Kick</span> <span style={styles.it}>It</span></div>
