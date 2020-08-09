import styled from 'styled-components';

import { device } from '../device';




export const TaskList = styled.ul`
list-style-type: none;
width: 100%;
min-height: 75px;
max-height:240px;
overflow-y: auto;
padding:0;
.buffer{
  width:100%;
  height: 40px;
  visibility:hidden;
  opacity: 0;
}
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
  &.task-icon{
    font-size: 24px;
    font-weight: 400;
  }
  &.edit-mode{
    color: ${props => props.theme.defaultIcon};
  }
}
.task-title{
  font-weight: 400;
  font-style:normal;
  font-size: 14px;
  line-height: 16px;
  width 100px;
  color: ${props => props.theme.taskText};
}
label{
  margin: 0;
  input {
    width: 140px;
    border: none;
    border-bottom: 1px solid ${props => props.theme.secondary};
    font-weight: 400;
    font-style:normal;
    font-size: 14px;
    line-height: 16px;
    &.deactivate{
      border: 1px solid ${props => props.theme.danger} !important;
    }
    &::placeholder{
      font-weight: 400;
      font-style:normal;
      font-size: 14px;
      line-height: 16px;
    }
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
&.active{
  background-color: ${props => props.theme.white};
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

&.create-task{
  i.task-icon{
    cursor: pointer;
  }
  .task-title {
    color: ${props => props.theme.primary};
  }
  label{
    margin: 0;
    input {
      width: 130px;
      border: none;
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
 &.create-task{
  label{
    margin: 0;
    input {
      width: 180px;
    }
  }
}
}
@media only screen and ${device.laptop} {
}
`