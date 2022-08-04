import { useState } from 'react';
import styled from 'styled-components';

const NodeDiv = styled.div<{x: number, y: number}>`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background-color: #2891cd;
    filter: drop-shadow(0px 0px 10px, red);
    position: absolute;
    top: ${props => props.y}px;
    left: ${props => props.x}px;
`

const Node = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    let mouseDown = false;

    return (
        <NodeDiv 
            x={x} y={y} 
            onMouseDown={() => {mouseDown = true}} 
            onMouseUp={() => {mouseDown = false}} 
            onMouseMove={e => {
                if (mouseDown) {
                    setX(e.currentTarget.parentElement?.offsetLeft as number + e.clientX - e.currentTarget.offsetLeft);
                    setY(e.currentTarget.parentElement?.offsetTop as number + e.clientY - e.currentTarget.offsetTop);
                }

            }}
            onDrag={(e) => {
                console.log(e);
            }}
        />
    )
}

export { Node };