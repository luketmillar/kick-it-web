type onFrameCallback = (i: number, frameLength: number, totalTime: number) => void

export default class FrameTimer {
    private readonly onFrame: onFrameCallback

    private isStarted: boolean
    private isRunning: boolean

    private startTime: number
    private lastFrameTime: number
    private frameCount: number
    private frameId: number | undefined

    private pauseTime: number | undefined

    constructor(onFrame: onFrameCallback) {
        this.onFrame = onFrame
        this.reset()
    }

    public start() {
        if (this.isStarted) {
            throw new Error('cannot start the timer when it is already started')
        }
        this.cancelFrame()
        this.reset()
        this.isStarted = true
        this.isRunning = true
        this.scheduleNextFrame()
    }

    public stop() {
        if (!this.isStarted) {
            throw new Error('cannot stop the timer when it is not started')
        }
        this.cancelFrame()
        this.frameCount = 0
        this.pauseTime = undefined
        this.isStarted = false
        this.isRunning = false
    }

    public pause() {
        if (!this.isRunning) {
            throw new Error('cannot pause when it is not running')
        }
        if (!this.isStarted) {
            throw new Error('cannot pause when the timer is not started')
        }
        this.pauseTime = Date.now()
        this.cancelFrame()
        this.isRunning = false
    }

    public resume() {
        if (this.isRunning) {
            throw new Error('cannot resume when it is running')
        }
        if (this.pauseTime === undefined) {
            throw new Error('unexpected pauseTime to be undefined when it is paused')
        }
        const pauseLength = Date.now() - this.pauseTime
        this.startTime = this.startTime + pauseLength
        this.lastFrameTime = this.lastFrameTime + pauseLength
        this.pauseTime = undefined
        this.isRunning = true
        this.scheduleNextFrame()
    }

    private frame = () => {
        const now = Date.now()
        const totalDuration = now - this.startTime
        const frameLength = now - this.lastFrameTime

        this.onFrame(this.frameCount, frameLength, totalDuration)

        // it is possible that the frame handler paused or stopped the game
        if (this.isStarted && this.isRunning) {
            this.frameCount++
            this.lastFrameTime = now
            this.scheduleNextFrame()
        }
    }

    private cancelFrame = () => {
        if (this.frameId !== undefined) {
            window.cancelAnimationFrame(this.frameId)
            this.frameId = undefined
        }
    }

    private scheduleNextFrame = () => {
        this.frameId = window.requestAnimationFrame(this.frame)
    }

    private reset = () => {
        this.startTime = Date.now()
        this.lastFrameTime = this.startTime
        this.frameCount = 0
        this.isStarted = false
        this.isRunning = false
    }
}
