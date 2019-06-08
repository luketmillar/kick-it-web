import Page from 'components/common/Page'
import Game from 'components/play/Game'
import GameValues from 'components/play/gameValues'
import React from 'react'

export default () => {
    return (
        <Page style={{ backgroundColor: GameValues.background.color }}>
            <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Game />
            </div>
        </Page>
    )
}
