import Point from './point'

export const distance = (a: Point, b: Point): number => {
    const dx = a.x - b.x
    const dy = a.y - b.y
    return Math.sqrt(dx * dx + dy * dy)
}

export const clamp = (value: number, min: number, max: number): number => {
    return Math.max(Math.min(value, max), min)
}

export const randomFloat = (min: number, max: number): number => Math.random() * (max - min) + min

export const random = (min: number, max: number): number => Math.round(randomFloat(min, max))

export const randomAngle = (min: number = 22, max: number = 45) => (randomFloat(min, max) * Math.PI) / 180

export const getVelocity = (angle, speed) => {
    return {
        x: speed * Math.cos(angle),
        y: speed * Math.sin(angle),
    }
}

export const randomSpeed = (min: number, max: number) => randomFloat(min, max)
