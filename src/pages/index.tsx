import Page from 'components/common/Page'
import PlayButton from 'components/home/PlayButton'
import Title from 'components/home/Title'
import { navigate } from 'gatsby'
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
    },
}

export default () => {
    const play = () => {
        navigate('/play')
    }
    return (
        <Page>
            <div style={styles.wrapper}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={styles.center}>
                        <Title />
                        <div style={{ marginLeft: 50, marginTop: 20 }}>
                            <PlayButton onClick={play} />
                        </div>
                    </div>
                    <div style={styles.subtitle}>By Maddie Millar</div>
                </div>
            </div>
        </Page>
    )
}
