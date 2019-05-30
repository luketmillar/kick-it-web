import Page from 'components/common/Page'
import GameController from 'components/play/GameController'
import GameValues from 'components/play/gameValues'
import React from 'react'

export default () => {
    return (
        <Page style={{ backgroundColor: GameValues.background.color }}>
            <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <GameController />
            </div>
        </Page>
    )
}
