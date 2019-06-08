import Point from './point'

export const distance = (a: Point, b: Point): number => {
    const dx = a.x - b.x
    const dy = a.y - b.y
    return Math.sqrt(dx * dx + dy * dy)
}

export const clamp = (value: number, min: number, max: number): number => {
    return Math.max(Math.min(value, max), min)
}

export const random = (min: number, max: number): number => {
    return Math.round(Math.random() * (max - min) + min)
}
