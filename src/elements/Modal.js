import React, { Component } from 'react';
import styled from "styled-components";
import { Portal, absolute } from 'utilities';
import Icon from './Icon';
import { Card } from './Cards';

export default class Modal extends Component {
  render() {
    const { on, toggle, children } = this.props;
    return (
      <div>
        <Portal>
          {on &&
            <ModalWrapper>
              <ModalCard>
                <CloseButton onClick={toggle}>
                  <Icon name="close" />
                </CloseButton>
                <div>{children}</div>
              </ModalCard>
              <Background onClick={toggle} />
            </ModalWrapper>
          }
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
const ModalCard = Card.extend`
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
const Background = styled.div`
      ${absolute({})}
      width: 100%;
      height: 100%;      
      background-color: rgba(0,0,0,0.3);    
    `
