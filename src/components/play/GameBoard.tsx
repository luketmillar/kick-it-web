import React from 'react'
import GameValues from './gameValues'

interface IProps {
    time: number
    diff: number
    playerA: number
    playerB: number
}

interface IState {
    x: 0
    y: 0
}

const angle = ((Math.random() * 45 + 22) * Math.PI) / 180
const velocity = {
    horizontal: GameValues.ball.speed * Math.cos(angle),
    vertical: GameValues.ball.speed * Math.sin(angle),
}

export default class GameBoard extends React.Component<IProps, IState> {
    public static defaultProps = { diff: 0 }
    public static getDerivedStateFromProps(props, state) {
        const x = state.x + velocity.horizontal * (props.diff / 1000)
        const y = state.y + velocity.vertical * (props.diff / 1000)
        if (x + GameValues.ball.size >= GameValues.board.width) {
            velocity.horizontal = -Math.abs(velocity.horizontal)
        } else if (x <= 0) {
            velocity.horizontal = Math.abs(velocity.horizontal)
        }
        if (y + GameValues.ball.size >= GameValues.board.height) {
            velocity.vertical = -Math.abs(velocity.vertical)
        } else if (y <= 0) {
            velocity.vertical = Math.abs(velocity.vertical)
        }
        return {
            x,
            y,
        }
    }
    constructor(props) {
        super(props)
        this.state = {
            x: 0,
            y: 0,
        }
    }
    public render() {
        return (
            <div
                style={{
                    width: GameValues.board.width,
                    height: GameValues.board.height,
                    position: 'relative',
                    border: `2px dashed ${GameValues.board.border}`,
                    backgroundColor: GameValues.board.color,
                }}
            >
                <Ball x={this.state.x} y={this.state.y} />
                <PlayerA y={this.props.playerA} />
                <PlayerB y={this.props.playerB} />
            </div>
        )
    }
}

const Ball = ({ x, y }) => (
    <div
        style={{
            backgroundColor: GameValues.ball.color,
            width: GameValues.ball.size,
            height: GameValues.ball.size,
            borderRadius: GameValues.ball.size,
            top: y,
            left: x,
            position: 'absolute',
        }}
    />
)

const PlayerA = ({ y }) => <Player x={-20} y={y} />

const PlayerB = ({ y }) => <Player x={GameValues.board.width} y={y} />

const Player = ({ x, y, height = GameValues.player.size }) => (
    <div
        style={{ backgroundColor: GameValues.player.color, width: 20, height, position: 'absolute', top: y, left: x }}
    />
)
