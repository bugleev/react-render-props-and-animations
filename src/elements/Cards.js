import styled from "styled-components";

import { elevation, transition, purp } from "utilities";

export const Card = styled.div`     
      width: 320px;
      background: #fefefe;
      border-radius: 5px;
      padding: 1em;      
      margin: 0 auto;
      color: ${purp}     
      ${elevation[3]};    
      ${transition({ property: 'box-shadow' })};
      &:hover{
        
      }    

    `
