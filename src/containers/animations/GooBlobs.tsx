/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'
import { useTrail, animated } from 'react-spring'

const fast = { tension: 1200, friction: 40 }
const slow = { mass: 10, tension: 200, friction: 50 }
// %はtransformをかけている対象の大きさから
const trans = (x: any, y: any) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-80%,0)`

const GooBlobs = () => {
  const [trail, set] = useTrail(3, () => ({ xy: [0, 0], config: i => (i === '0' ? fast : slow) }))
  const classes = styles()
  return (
    <React.Fragment>
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
          <feColorMatrix in="blur" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7" />
        </filter>
      </svg>
      <div css={classes.hooksMain} onMouseMove={e => set({ xy: [e.clientX, e.clientY] } as any)}>
        {trail.map((props: any, index) => (
          <animated.div key={index} style={{ transform: props.xy.interpolate(trans) }} />
        ))}
      </div>
    </React.Fragment>
  )
}

const styles = () => ({
  hooksMain: css`
    position: absolute;
    width: 100%;
    height: 100%;
    filter: url('#goo');
    overflow: hidden;
    div {
      position: absolute;
      will-change: transform;
      border-radius: 50%;
      background: lightcoral;
      box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
      opacity: 0.6;
    }
    div:nth-child(1) {
      width: 120px;
      height: 120px;
    }
    div:nth-child(2) {
      width: 250px;
      height: 250px;
    }
    div:nth-child(3) {
      width: 150px;
      height: 150px;
    }
    div::after {
      content: '';
      position: absolute;
      top: 20px;
      left: 20px;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.8);
    }
    div:nth-child(2)::after {
      top: 70px;
      left: 70px;
      width: 70px;
      height: 70px;
    }
    div:nth-child(3)::after {
      top: 50px;
      left: 50px;
      width: 50px;
      height: 50px;
    }
  `,
})

export default GooBlobs
