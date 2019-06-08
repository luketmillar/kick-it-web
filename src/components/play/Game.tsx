import GameController from 'model/controller'
import React from 'react'
import GameBoard from './GameBoard'

export default class Game extends React.Component {
    private readonly controller: GameController
    constructor(props) {
        super(props)
        this.controller = new GameController(this.onFrame)
    }
    public componentDidMount() {
        window.addEventListener('keydown', this.onKeyDown)
        window.addEventListener('blur', this.onBlur)
        window.addEventListener('focus', this.onFocus)
        this.controller.startGame()
    }
    public componentWillUnmount() {
        window.removeEventListener('keydown', this.onKeyDown)
        window.removeEventListener('blur', this.onBlur)
        window.removeEventListener('focus', this.onFocus)
    }
    public render() {
        return <GameBoard>{this.controller.components.map(component => component.draw())}</GameBoard>
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
}
