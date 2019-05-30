import React from 'react'
import GameBoard from './GameBoard'
import GameTimer from './GameTimer'

export default class GameController extends React.Component {
    private playerA = 50
    private playerB = 0
    public componentDidMount() {
        window.addEventListener('keydown', this.onKeyDown)
    }
    public render() {
        return (
            <GameTimer>
                {({ duration, frameLength }) => (
                    <GameBoard playerA={this.playerA} playerB={this.playerB} time={duration} diff={frameLength} />
                )}
            </GameTimer>
        )
    }
    private onKeyDown = e => {
        switch (e.key) {
            case 'i': {
                this.playerB = Math.max(this.playerB - 10, 0)
                return
            }
            case 'k': {
                this.playerB = Math.min(this.playerB + 10, 700)
                return
            }
            case 'e': {
                this.playerA = Math.max(this.playerA - 10, 0)
                return
            }
            case 'd': {
                this.playerA = Math.min(this.playerA + 10, 700)
                return
            }
        }
    }
}
