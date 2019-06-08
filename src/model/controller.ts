import gameValues from 'components/play/gameValues'
import * as Components from './components'
import FrameTimer from './frameTimer'

export default class Controller {
    private readonly frameTimer: FrameTimer
    private readonly onFrame: () => void

    private readonly ball: Components.Ball
    private readonly bottomWall: Components.Rectangle
    private readonly topWall: Components.Rectangle
    private readonly leftWall: Components.Rectangle
    private readonly rightWall: Components.Rectangle
    private readonly playerA: Components.Player
    private readonly playerB: Components.Player

    constructor(onFrame: () => void) {
        this.frameTimer = new FrameTimer(this.handleFrame)

        this.ball = new Components.Ball({ x: gameValues.board.width / 2, y: gameValues.board.height / 2 })

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
        this.ball.setVelocity({
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
        this.components.forEach(component => component.onFrame(i, frameLength, duration, { ball: this.ball }))

        // collision detection
        if (this.ball.collision(this.bottomWall)) {
            this.ball.setVelocityDirection({ y: -1 })
        }
        if (this.ball.collision(this.topWall)) {
            this.ball.setVelocityDirection({ y: 1 })
        }
        if (this.ball.collision(this.playerA)) {
            this.ball.setVelocityDirection({ x: 1 })
        } else if (this.ball.collision(this.leftWall)) {
            this.pause()
        }
        if (this.ball.collision(this.playerB)) {
            this.ball.setVelocityDirection({ x: -1 })
        } else if (this.ball.collision(this.rightWall)) {
            this.pause()
        }

        this.onFrame()
    }

    public get components(): Components.Base[] {
        return [this.ball, this.bottomWall, this.topWall, this.leftWall, this.rightWall, this.playerA, this.playerB]
    }
}

// const angle = ((Math.random() * 45 + 22) * Math.PI) / 180
// const velocity = {
//     horizontal: GameValues.ball.speed * Math.cos(angle),
//     vertical: GameValues.ball.speed * Math.sin(angle),
// }
