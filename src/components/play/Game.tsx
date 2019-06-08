import PlayButton from 'components/home/PlayButton'
import GameController from 'model/controller'
import React from 'react'
import GameBoard from './GameBoard'
import gameValues from './gameValues'

export default class Game extends React.Component {
    public state = { playing: false, paused: false }
    private readonly controller: GameController
    constructor(props) {
        super(props)
        this.controller = new GameController(this.onFrame, this.onGameWon, this.onGameLost)
    }
    public componentDidMount() {
        window.addEventListener('keydown', this.onKeyDown)
        window.addEventListener('blur', this.onBlur)
        window.addEventListener('focus', this.onFocus)
    }
    public componentWillUnmount() {
        window.removeEventListener('keydown', this.onKeyDown)
        window.removeEventListener('blur', this.onBlur)
        window.removeEventListener('focus', this.onFocus)
    }
    public render() {
        return (
            <div style={{ height: '100%', width: '100%', position: 'relative' }}>
                <GameBoard>{this.controller.components.map(component => component.draw())}</GameBoard>
                {!this.state.playing && (
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            height: gameValues.board.height,
                            width: gameValues.board.width,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <PlayButton onClick={this.play} />
                    </div>
                )}
            </div>
        )
    }
    private play = () => {
        this.setState({ playing: true })
        this.controller.startGame()
    }
    private onKeyDown = e => {
        switch (e.key) {
            case 'i': {
                this.controller.movePlayerUp()
                return
            }
            case 'k': {
                this.controller.movePlayerDown()
                return
            }
        }
    }
    private onBlur = () => {
        this.controller.pause()
    }
    private onFocus = () => {
        this.controller.resume()
    }
    private onFrame = () => {
        this.forceUpdate()
    }
    private onGameLost = () => {
        this.controller.endGame()
        this.setState({ playing: false })
    }
    private onGameWon = () => {
        this.controller.endGame()
        this.setState({ playing: false })
    }
}
