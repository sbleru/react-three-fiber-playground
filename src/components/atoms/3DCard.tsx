import * as React from 'react';
import { useSpring, animated } from 'react-spring'

/*!
 * ref https://www.react-spring.io/docs/hooks/examples 3D Card
 */

const calc = (x: any, y: any) => [0, 0, 1.1]
const trans = (x: any, y: any, s: any) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

type Props = {
  src: string
  srcGif: string
  active: boolean
}

export const Img3DCard: React.FC<Props> = (props) => {
  const [springProps, set] = useSpring(() => ({
    xys: props.active ? [0, 0, 1.1] : [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 }
  }))
  const [srcImg, setSrcImg] = React.useState(props.src)
  return (
    <animated.img
      src={srcImg}
      alt={''}
      onMouseOver={() => setSrcImg(props.srcGif)}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={
        props.active
          ? () => {setSrcImg(props.src);}
          : () => {set({ xys: [0, 0, 1] }); setSrcImg(props.src);}
      }
      style={{ transform: springProps.xys.interpolate(trans as any) }}
    />
  )
}