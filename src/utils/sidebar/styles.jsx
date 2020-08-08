import styled from 'styled-components';

import { device } from '../device';




export const TaskList = styled.ul`
list-style-type: none;
width: 100%;
max-height:240px;
overflow-y: auto;
padding:0;
@media only screen and ${device.tablet} {
}

@media only screen and ${device.laptop} {
}
`
export const TaskWrapper = styled.li`
width: 100%;
height: 36px;
i{
  color: ${props => props.theme.primary};
}
.task-title{
  width 100px;
}
label{
  margin: 0;
  input {
    width: 140px;
    border: none;
    border-bottom: 1px solid ${props => props.theme.secondary};
    &:focus{
      outline: none;
      border-bottom: 1px solid ${props => props.theme.info};
    }
  }
  i{
    cursor: pointer;
    font-size: 18px;
    &.confirm{
      opacity: .5;
      &:hover{
        opacity: 1;
      }
    }
  }
}
div.intereaction {
  width: auto;
  #options.options {
    i.options-icon {
        display: none !important;
    }
  }
}
&.default{
  i.default-icon{
    color: ${props => props.theme.defaultIcon};
  }
}
&:hover{
  background: ${props => props.theme.white};
  div.intereaction {
    #options.options {
    i.options-icon {
      display: initial !important;
    }
   }
  }
}
@media only screen and ${device.tablet} {
.task-title {
    width 150px;
}
  label{
  input{
    width: 200px;
  }
 }
}

@media only screen and ${device.laptop} {
}
`