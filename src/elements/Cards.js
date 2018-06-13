import styled from "styled-components";
import { elevation, transition, purp } from "utilities";

export const Card = styled.div`     
      min-width: 320px;
      background: #fefefe;
      border-radius: 5px;
      padding: 1em;
      color: ${purp}     
      ${elevation[3]};    
      ${transition({ property: 'box-shadow' })};
      &:hover{
        ${elevation[5]};  
      }    

    `
