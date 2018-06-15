import React, { Component } from 'react';
import styled from "styled-components";
import { Transition, animated } from 'react-spring';
import { Portal, absolute } from 'utilities';
import Icon from './Icon';
import { Card } from './Cards';

export default class Modal extends Component {
  render() {
    const { on, toggle, children } = this.props;
    return (
      <div>
        <Portal>
          <Transition
            native
            config={{
              tension: 150,
              friction: 10
            }}
            from={{ opacity: 0, bgOpacity: 0, y: -50 }}
            enter={{ opacity: 1, bgOpacity: 0.2, y: 0 }}
            leave={{ opacity: 0, bgOpacity: 0, y: 50 }}>
            {on &&
              (styles =>
                <ModalWrapper >
                  <ModalCard style={{
                    transform: styles.y.interpolate(
                      y => `translate3d(0, ${y}px, 0)`),
                    ...styles
                  }}>
                    <CloseButton onClick={toggle}>
                      <Icon name="close" />
                    </CloseButton>
                    <div>{children}</div>
                  </ModalCard>
                  <Background
                    onClick={toggle}
                    style={{ opacity: styles.bgOpacity }}
                  />
                </ModalWrapper>
              )
            }
          </Transition>
        </Portal>
      </div>
    )
  }
}
const ModalWrapper = styled.div`
      ${absolute({})}
      width: 100%;
      height: 100%;  
      display: flex;
      justify-content: center;
      align-items: center;
    `
const AnimCard = Card.withComponent(animated.div);
const ModalCard = AnimCard.extend`
      position: relative;      
      z-index: 10;      
      margin-bottom: 200px; 
    `

const CloseButton = styled.button`
       ${absolute({ x: "right" })}
      border: none;
      background: transparent;
      padding: 0.6em; 
    `
const Background = styled(animated.div)`
      ${absolute({})}
      width: 100%;
      height: 100%;      
      background-color: #333;
      opacity: 0.7;    
    `
