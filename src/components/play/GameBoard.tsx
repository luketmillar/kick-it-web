import React from 'react'
import GameValues from './gameValues'

const GameBoard = ({ children }) => (
    <div
        style={{
            width: GameValues.board.width,
            height: GameValues.board.height,
            position: 'relative',
            border: `2px dashed ${GameValues.board.border}`,
            backgroundColor: GameValues.board.color,
        }}
    >
        {children}
    </div>
)

export default GameBoard
