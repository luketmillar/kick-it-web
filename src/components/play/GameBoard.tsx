import React from 'react'
import GameValues from './gameValues'

const GameBoard = ({ children }) => (
    <div
        style={{
            width: GameValues.board.width,
            height: GameValues.board.height,
            position: 'relative',
            borderRadius: 20,
            overflow: 'hidden',
            border: `4px dashed ${GameValues.board.border}`,
            // backgroundColor: GameValues.board.color,
        }}
    >
        {children}
    </div>
)

export default GameBoard
