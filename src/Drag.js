import React, { Component } from 'react';
import styled from "styled-components";
import { Gesture } from "react-with-gesture";
import { Spring, animated, interpolate } from 'react-spring';
import { Card } from "./elements";


const AnimCard = Card.withComponent(animated.div);
const DragCard = AnimCard.extend`
  height: 300px;
  position: absolute; 
  & h1{
    user-select: none;
  }
`
const CardContainer = styled(animated.div)`
  position: relative; 
  max-width: 320px;
  height: 300px;
  margin: 0 auto;
  margin-bottom: 10em;
  border-radius: 5px;
`
export default class Drag extends Component {
  onUp = xDelta => () => {
    xDelta < -300 ? alert("remove card") : xDelta > 200 && alert("accept card")
  }
  render() {
    return (
      <React.Fragment>
        <Gesture>
          {({ down, xDelta, yDelta }) => (
            <Spring
              native
              to={{
                x: down ? xDelta : 0,
                y: down ? yDelta : 0
              }}
              immediate={name => down && (name === "x" || name === "y")}
            >
              {({ x, y }) => (
                <CardContainer className="card-wrapper" style={{
                  background: x.interpolate({
                    range: [0, 300],
                    output: ["#fff", "#000"]
                  })
                }}>
                  <DragCard
                    onMouseUp={this.onUp(xDelta)}
                    onTouchEnd={this.onUp(xDelta)}
                    style={{
                      transform: interpolate(
                        [x, y, x.interpolate({
                          range: [-200, 200],
                          output: [-45, 45],
                          extrapolate: "clamp"
                        })], (x, y, rotate) => `translate3d(${x}px, 0px, 0) rotate(${rotate}deg)`
                      ),
                      opacity: x.interpolate({
                        range: [-300, -100],
                        output: [0, 1],
                        extrapolate: "clamp"
                      })
                    }}>
                    <h1>Drag me</h1>
                  </DragCard>
                </CardContainer>
              )}
            </Spring>
          )}
        </Gesture>
      </React.Fragment>
    )
  }
}
