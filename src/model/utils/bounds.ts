interface IBoundsOptions {
    left?: number
    right?: number
    top?: number
    bottom?: number
    centerX?: number
    centerY?: number
    width?: number
    height?: number
}

export default class Bounds {
    public readonly left: number
    public readonly top: number
    public readonly width: number
    public readonly height: number
    constructor(params: IBoundsOptions) {
        if (params.left !== undefined && params.width !== undefined) {
            this.left = params.left
            this.width = params.width
        } else if (params.left !== undefined && params.right !== undefined) {
            this.left = params.left
            this.width = params.right - params.left
        } else if (params.width !== undefined && params.right !== undefined) {
            this.left = params.right - params.width
            this.width = params.width
        } else if (params.left !== undefined && params.centerX !== undefined) {
            this.left = params.left
            this.width = (params.centerX - params.left) * 2
        } else if (params.width !== undefined && params.centerX !== undefined) {
            this.left = params.centerX - params.width / 2
            this.width = params.width
        } else if (params.right !== undefined && params.centerX !== undefined) {
            this.width = params.right - params.centerX
            this.left = params.right - this.width
        } else {
            throw new Error('invalid horizontal input')
        }

        if (params.top !== undefined && params.height !== undefined) {
            this.top = params.top
            this.height = params.height
        } else if (params.top !== undefined && params.bottom !== undefined) {
            this.top = params.top
            this.height = params.bottom - params.top
        } else if (params.height !== undefined && params.bottom !== undefined) {
            this.top = params.bottom - params.height
            this.height = params.height
        } else if (params.top !== undefined && params.centerY !== undefined) {
            this.top = params.top
            this.height = (params.centerY - params.top) * 2
        } else if (params.height !== undefined && params.centerY !== undefined) {
            this.top = params.centerY - params.height / 2
            this.height = params.height
        } else if (params.bottom !== undefined && params.centerY !== undefined) {
            this.height = params.bottom - params.centerY
            this.top = params.bottom - this.height
        } else {
            throw new Error('invalid vertical input')
        }
    }

    get right(): number {
        return this.left + this.width
    }
    get bottom(): number {
        return this.top + this.height
    }
    get centerX(): number {
        return this.left + this.width / 2
    }
    get centerY(): number {
        return this.top + this.height / 2
    }

    public overlaps(other: Bounds): boolean {
        if (other.right < this.left) {
            return false
        }
        if (other.bottom < this.top) {
            return false
        }
        if (other.top > this.bottom) {
            return false
        }
        if (other.left > this.right) {
            return false
        }
        return true
    }

    public setPosition = (x: number, y: number): Bounds => {
        return new Bounds({ width: this.width, height: this.height, centerX: x, centerY: y })
    }

    public setSize = (width: number, height: number): Bounds => {
        return new Bounds({ width, height, centerX: this.centerX, centerY: this.centerY })
    }

    public setTop = (y: number): Bounds => {
        return new Bounds({ width: this.width, height: this.height, centerX: this.centerX, top: y })
    }

    public setBottom = (y: number): Bounds => {
        return new Bounds({ width: this.width, height: this.height, centerX: this.centerX, bottom: y })
    }
}
