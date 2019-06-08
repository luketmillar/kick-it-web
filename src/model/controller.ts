import gameValues from 'components/play/gameValues'
import * as Components from './components'
import * as EffectBalls from './components/effectBalls'
import FrameTimer from './frameTimer'

export default class Controller {
    private readonly frameTimer: FrameTimer
    private readonly onFrame: () => void

    private readonly gameBall: Components.Ball
    private effectBalls: Components.EffectBall[]
    private readonly bottomWall: Components.Rectangle
    private readonly topWall: Components.Rectangle
    private readonly leftWall: Components.Rectangle
    private readonly rightWall: Components.Rectangle
    private readonly playerA: Components.Player
    private readonly playerB: Components.Player

    constructor(onFrame: () => void) {
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
                right: 0,
                centerY: gameValues.board.height / 2,
            },
            true
        )
        this.playerB = new Components.Player(
            gameValues.player.height,
            {
                left: gameValues.board.width,
                centerY: gameValues.board.height / 2,
            },
            false
        )

        this.onFrame = onFrame
    }

    public startGame() {
        const angle = ((Math.random() * 45 + 22) * Math.PI) / 180
        this.gameBall.setVelocity({
            x: gameValues.ball.speed * Math.cos(angle),
            y: gameValues.ball.speed * Math.sin(angle),
        })

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

    public movePlayerUp() {
        this.playerB.translate({ y: -10 })
    }

    public movePlayerDown() {
        this.playerB.translate({ y: 10 })
    }

    private handleFrame = (i: number, frameLength: number, duration: number) => {
        this.components.forEach(component => component.onFrame(i, frameLength, duration, { ball: this.gameBall }))

        // collision detection
        if (this.gameBall.collision(this.bottomWall)) {
            this.gameBall.setVelocityDirection({ y: -1 })
        }
        if (this.gameBall.collision(this.topWall)) {
            this.gameBall.setVelocityDirection({ y: 1 })
        }
        if (this.gameBall.collision(this.playerA)) {
            this.gameBall.setVelocityDirection({ x: 1 })
        } else if (this.gameBall.collision(this.leftWall)) {
            this.pause()
        }
        if (this.gameBall.collision(this.playerB)) {
            this.gameBall.setVelocityDirection({ x: -1 })
        } else if (this.gameBall.collision(this.rightWall)) {
            this.pause()
        }

        this.effectBalls = this.effectBalls.filter(effectBall => {
            if (effectBall.collision(this.gameBall)) {
                effectBall.onHit(this.gameBall, this.playerA, this.playerB)
                return false
            }
            return true
        })

        if (i % 600 === 0) {
            this.effectBalls = this.effectBalls.concat([EffectBalls.createRandomEffect()])
        }

        this.onFrame()
    }

    public get components(): Components.Base[] {
        return [
            this.gameBall,
            ...this.effectBalls,
            this.bottomWall,
            this.topWall,
            this.leftWall,
            this.rightWall,
            this.playerA,
            this.playerB,
        ]
    }
}

// const angle = ((Math.random() * 45 + 22) * Math.PI) / 180
// const velocity = {
//     horizontal: GameValues.ball.speed * Math.cos(angle),
//     vertical: GameValues.ball.speed * Math.sin(angle),
// }
