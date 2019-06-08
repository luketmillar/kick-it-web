import * as Components from 'model/components'
import * as math from './math'

const collides = (a: Components.Base, b: Components.Base) => {
    if (a instanceof Components.Circle && b instanceof Components.Circle) {
        return circleCircle(a, b)
    } else if (a instanceof Components.Circle && b instanceof Components.Rectangle) {
        return circleRectangle(a, b)
    } else if (a instanceof Components.Rectangle && b instanceof Components.Circle) {
        return circleRectangle(b, a)
    } else {
        return a.bounds.overlaps(b.bounds)
    }
}

const circleCircle = (a: Components.Circle, b: Components.Circle): boolean => {
    const x = a.bounds.centerX - b.bounds.centerX
    const y = a.bounds.centerY - b.bounds.centerY
    const centerDistanceSq = x * x + y * y
    const radius = a.radius + b.radius
    const radiusSq = radius * radius
    return centerDistanceSq <= radiusSq
}

const circleRectangle = (a: Components.Circle, b: Components.Rectangle): boolean => {
    const closestX = math.clamp(a.x, b.bounds.left, b.bounds.right)
    const closestY = math.clamp(a.y, b.bounds.top, b.bounds.bottom)
    const distanceX = a.x - closestX
    const distanceY = a.y - closestY
    const distanceSquared = distanceX * distanceX + distanceY * distanceY
    return distanceSquared < a.radius * a.radius
}

export default {
    check: collides,
}
