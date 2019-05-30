import React from 'react'

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

const ballSize = 20
const width = 1200
const height = 600
const speed = 500
const angle = ((Math.random() * 45 + 22) * Math.PI) / 180
const velocity = {
    horizontal: speed * Math.cos(angle),
    vertical: speed * Math.sin(angle),
}

export default class GameBoard extends React.Component<IProps, IState> {
    public static defaultProps = { diff: 0 }
    public static getDerivedStateFromProps(props, state) {
        const x = state.x + velocity.horizontal * (props.diff / 1000)
        const y = state.y + velocity.vertical * (props.diff / 1000)
        if (x + ballSize >= width) {
            velocity.horizontal = -Math.abs(velocity.horizontal)
        } else if (x <= 0) {
            velocity.horizontal = Math.abs(velocity.horizontal)
        }
        if (y + ballSize >= height) {
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
            <div style={{ width, height, position: 'relative', border: '2px dashed white' }}>
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
            backgroundColor: 'white',
            width: ballSize,
            height: ballSize,
            borderRadius: ballSize,
            top: y,
            left: x,
            position: 'absolute',
        }}
    />
)

const PlayerA = ({ y }) => <Player x={-20} y={y} />

const PlayerB = ({ y }) => <Player x={width} y={y} />

const Player = ({ x, y, height = 200 }) => (
    <div style={{ backgroundColor: 'white', width: 20, height, position: 'absolute', top: y, left: x }} />
)
