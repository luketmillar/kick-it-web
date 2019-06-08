import gameValues from 'components/play/gameValues'
import * as Components from './components'
import * as EffectBalls from './components/effectBalls'
import FrameTimer from './frameTimer'

export default class Controller {
    private readonly frameTimer: FrameTimer
    private readonly onFrame: () => void
    private readonly onGameWon: () => void
    private readonly onGameLost: () => void

    private readonly gameBall: Components.GameBall
    private effectBalls: Components.EffectBall[]
    private readonly bottomWall: Components.Rectangle
    private readonly topWall: Components.Rectangle
    private readonly leftWall: Components.Rectangle
    private readonly rightWall: Components.Rectangle
    private playerA: Components.Player
    private playerB: Components.Player

    private lastHitBy: Components.Player | undefined

    constructor(onFrame: () => void, onGameWon: () => void, onGameLost: () => void) {
        this.frameTimer = new FrameTimer(this.handleFrame)

        this.gameBall = new Components.GameBall()
        this.effectBalls = []

        this.bottomWall = new Components.BottomWall()
        this.topWall = new Components.TopWall()
        this.leftWall = new Components.LeftWall()
        this.rightWall = new Components.RightWall()

        this.playerA = new Components.Player(
            gameValues.player.height,
            {
                left: 0,
                centerY: gameValues.board.height / 2,
            },
            true
        )
        this.playerB = new Components.Player(
            gameValues.player.height,
            {
                right: gameValues.board.width,
                centerY: gameValues.board.height / 2,
            },
            false
        )

        this.lastHitBy = undefined
        this.onFrame = onFrame
        this.onGameWon = onGameWon
        this.onGameLost = onGameLost
    }

    public startGame() {
        this.gameBall.reset()
        this.effectBalls = []
        this.lastHitBy = undefined
        this.playerA = new Components.Player(
            gameValues.player.height,
            {
                left: 0,
                centerY: gameValues.board.height / 2,
            },
            true
        )
        this.playerB = new Components.Player(
            gameValues.player.height,
            {
                right: gameValues.board.width,
                centerY: gameValues.board.height / 2,
            },
            false
        )
        this.frameTimer.start()
    }

    public pause() {
        this.frameTimer.pause()
    }

    public resume() {
        this.frameTimer.resume()
    }

    public restart() {
        this.frameTimer.stop()
        this.frameTimer.start()
    }

    public stop() {
        this.frameTimer.stop()
    }

    public endGame() {
        this.stop()
    }

    public movePlayerUp() {
        this.playerB.translate({ y: -1 * this.playerB.movementSpeed })
    }

    public movePlayerDown() {
        this.playerB.translate({ y: this.playerB.movementSpeed })
    }

    private handleFrame = (i: number, frameLength: number, duration: number) => {
        this.components.forEach(component => component.onFrame(i, frameLength, duration, { ball: this.gameBall }))

        // collision detection
        if (this.gameBall.collision(this.playerA)) {
            this.gameBall.setVelocityDirection({ x: 1 })
            this.lastHitBy = this.playerA
        }
        if (this.gameBall.collision(this.playerB)) {
            this.gameBall.setVelocityDirection({ x: -1 })
            this.lastHitBy = this.playerB
        }
        if (this.gameBall.collision(this.leftWall)) {
            this.onGameWon()
        }
        if (this.gameBall.collision(this.rightWall)) {
            this.onGameLost()
        }

        this.balls.forEach(ball => {
            if (ball.collision(this.bottomWall)) {
                ball.setVelocityDirection({ y: -1 })
            }
            if (ball.collision(this.topWall)) {
                ball.setVelocityDirection({ y: 1 })
            }
            if (ball !== this.gameBall) {
                if (ball.collision(this.leftWall)) {
                    ball.setVelocityDirection({ x: 1 })
                }
                if (ball.collision(this.rightWall)) {
                    ball.setVelocityDirection({ x: -1 })
                }
            }
        })

        this.effectBalls = this.effectBalls.filter(effectBall => {
            if (effectBall.collision(this.gameBall)) {
                effectBall.onHit(this.gameBall)
                return false
            }
            if (effectBall.collision(this.playerA)) {
                effectBall.onHit(this.playerA)
                return false
            }
            if (effectBall.collision(this.playerB)) {
                effectBall.onHit(this.playerB)
                return false
            }
            return true
        })

        if (i !== 0 && i % 600 === 0) {
            this.effectBalls = this.effectBalls.concat([EffectBalls.createRandomEffect()])
        }

        this.onFrame()
    }

    public get components(): Components.Base[] {
        return [...this.balls, this.bottomWall, this.topWall, this.leftWall, this.rightWall, this.playerA, this.playerB]
    }

    public get balls(): Components.Ball[] {
        return [this.gameBall, ...this.effectBalls]
    }
}
