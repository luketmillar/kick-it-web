import React from 'react'
import GameBoard from './GameBoard'

export default class GameController extends React.Component {
    public state = { duration: 0, frameLength: 0, paused: true }
    private frameId: number | undefined
    private startTime: number
    private paused = false
    public componentDidMount() {
        this.startLoop()
        window.addEventListener('blur', this.onBlur)
        window.addEventListener('focus', this.onFocus)
    }
    public componentWillUnmount() {
        this.stopLoop()
    }
    public render() {
        return <GameBoard time={this.state.duration} diff={this.state.frameLength} />
    }
    private loop = () => {
        const duration = Date.now() - this.startTime
        const lastDuration = this.state.duration
        this.setState({ duration, frameLength: lastDuration === 0 ? 0 : duration - lastDuration })
        if (!this.paused) {
            this.frameId = window.requestAnimationFrame(this.loop)
        }
    }
    private startLoop = () => {
        if (this.frameId === undefined) {
            this.startTime = Date.now()
            this.paused = false
            this.frameId = window.requestAnimationFrame(this.loop)
        }
    }
    private stopLoop() {
        if (this.frameId !== undefined) {
            window.cancelAnimationFrame(this.frameId)
        }
    }
    private onBlur = () => {
        console.log('blur')
        this.paused = true
        this.frameId = undefined
        this.setState({ duration: 0 })
    }
    private onFocus = () => {
        console.log('focus')
        this.paused = false
        this.startLoop()
    }
}
