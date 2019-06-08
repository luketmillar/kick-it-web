import * as math from 'model/utils/math'
import React from 'react'
import { Player } from '.'
import Ball from './ball'
import EffectBall from './effectBall'

export class GrowEffect extends EffectBall {
    public onHit(item: Ball | Player) {
        item.grow()
    }
    public svgContents() {
        return (
            <React.Fragment>
                <circle cx="36.5" cy="36.5" r="34.5" fill="#D531C4" stroke="#D531C4" strokeWidth="4" />
                <path
                    d="M34.2679 15C35.0377 13.6667 36.9623 13.6667 37.7321 15L45.5263 28.5C46.2961 29.8333 45.3338 31.5 43.7942 31.5H28.2058C26.6662 31.5 25.7039 29.8333 26.4737 28.5L34.2679 15Z"
                    fill="white"
                />
                <path
                    d="M37.7321 57C36.9622 58.3333 35.0377 58.3333 34.2679 57L26.4737 43.5C25.7039 42.1667 26.6662 40.5 28.2058 40.5L43.7942 40.5C45.3338 40.5 46.2961 42.1667 45.5263 43.5L37.7321 57Z"
                    fill="white"
                />
            </React.Fragment>
        )
    }
}

export class ShrinkEffect extends EffectBall {
    public onHit(item: Ball | Player) {
        item.shrink()
    }

    public svgContents() {
        return (
            <React.Fragment>
                <circle cx="36.5" cy="36.5" r="34.5" fill="#721BC9" stroke="#721BC9" strokeWidth="4" />
                <path
                    d="M26.2321 15.2583C25.4623 13.925 26.4245 12.2583 27.9641 12.2583L43.5526 12.2583C45.0922 12.2583 46.0544 13.925 45.2846 15.2583L37.4904 28.7583C36.7206 30.0917 34.7961 30.0917 34.0263 28.7583L26.2321 15.2583Z"
                    fill="white"
                />
                <path
                    d="M27.9641 60.2583C26.4245 60.2583 25.4622 58.5917 26.232 57.2583L34.0263 43.7583C34.7961 42.425 36.7206 42.425 37.4904 43.7583L45.2846 57.2583C46.0544 58.5917 45.0922 60.2583 43.5526 60.2583L27.9641 60.2583Z"
                    fill="white"
                />
            </React.Fragment>
        )
    }
}

export class SpeedUpEffect extends EffectBall {
    public onHit(item: Ball | Player) {
        item.speedUp()
    }

    public svgContents() {
        return (
            <React.Fragment>
                <circle cx="36.5" cy="36.5" r="34.5" fill="#127BDB" stroke="#127BDB" strokeWidth="4" />
                <path
                    d="M35.5489 20.9271C35.8483 20.0057 37.1517 20.0057 37.4511 20.9271L40.429 30.0922C40.5629 30.5042 40.9468 30.7832 41.3801 30.7832H51.0169C51.9856 30.7832 52.3884 32.0228 51.6046 32.5922L43.8083 38.2566C43.4578 38.5112 43.3112 38.9626 43.445 39.3746L46.423 48.5398C46.7223 49.4611 45.6678 50.2272 44.8841 49.6578L37.0878 43.9934C36.7373 43.7388 36.2627 43.7388 35.9122 43.9934L28.1159 49.6578C27.3322 50.2272 26.2777 49.4611 26.577 48.5398L29.555 39.3746C29.6888 38.9626 29.5422 38.5112 29.1917 38.2566L21.3954 32.5922C20.6116 32.0228 21.0144 30.7832 21.9831 30.7832H31.6199C32.0532 30.7832 32.4371 30.5042 32.571 30.0922L35.5489 20.9271Z"
                    fill="white"
                />
            </React.Fragment>
        )
    }
}

export class SlowDownEffect extends EffectBall {
    public onHit(item: Ball | Player) {
        item.slowDown()
    }
    public svgContents() {
        return (
            <React.Fragment>
                <circle cx="36.5" cy="36.5" r="34.5" fill="#26AB05" stroke="#26AB05" strokeWidth="4" />
                <path
                    d="M50 37C50 44.732 43.0604 44.5 34.5 44.5C25.9396 44.5 19 44.732 19 37C19 29.268 25.9396 23 34.5 23C43.0604 23 50 29.268 50 37Z"
                    fill="white"
                />
                <ellipse cx="54" cy="41.5" rx="4" ry="2.5" fill="white" />
                <ellipse
                    cx="45.1917"
                    cy="46.3509"
                    rx="1.88132"
                    ry="1.57827"
                    transform="rotate(66.8036 45.1917 46.3509)"
                    fill="white"
                />
                <ellipse
                    cx="23.3075"
                    cy="46.4184"
                    rx="1.88132"
                    ry="1.57827"
                    transform="rotate(120 23.3075 46.4184)"
                    fill="white"
                />
            </React.Fragment>
        )
    }
}

export const createRandomEffect = (): EffectBall => {
    switch (math.random(0, 3)) {
        case 0:
            return new GrowEffect()
        case 1:
            return new ShrinkEffect()
        case 2:
            return new SpeedUpEffect()
        case 3:
        default:
            return new SlowDownEffect()
    }
}
