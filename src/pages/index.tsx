import Page from 'components/common/Page'
import Title from 'components/home/Title'
import Game from 'components/play/Game'
import gameValues from 'components/play/gameValues'
import React from 'react'
import Style from 'styles'

const styles = {
    wrapper: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    center: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    } as const,
    subtitle: {
        textTransform: 'uppercase',
        color: Style.color.white,
        fontSize: 28,
        letterSpacing: 9,
        fontWeight: 300,
        marginTop: -50,
        marginLeft: 10,
        userSelect: 'none',
    } as const,
}

export default () => {
    return (
        <Page
            style={{
                backgroundColor: gameValues.background.color,
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
            }}
        >
            <div style={{ width: gameValues.board.width, marginTop: -20, marginBottom: 40 }}>
                <Title />
                <div style={styles.subtitle}>By Maddie Millar</div>
            </div>
            <div
                style={{
                    height: gameValues.board.height + 50,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Game />
            </div>
        </Page>
    )
}
