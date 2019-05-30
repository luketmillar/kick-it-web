import Page from 'components/common/Page'
import GameController from 'components/play/GameController'
import React from 'react'

export default () => {
    return (
        <Page>
            <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <GameController />
            </div>
        </Page>
    )
}
