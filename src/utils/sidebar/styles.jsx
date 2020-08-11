import styled from 'styled-components';

import { device } from '../device';




export const TaskList = styled.ul`
list-style-type: none;
width: 100%;
min-height: 75px;
height:240px;
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
&.default{
  i.default-icon{
    color: ${props => props.theme.defaultIcon};
  }
}
&.active{
  background-color: ${props => props.theme.selectedTask};
  color: ${props => props.theme.primary} !important;
  .task-title{
    font-weight: 500;
    color: ${props => props.theme.primary} !important;
  }
}
&:hover{
  background-color: ${props => props.theme.taskHover};
  .intereaction {
    #options.options {
    i.options-icon {
      font-size: 18px;
      font-weight: 400;
      display: initial !important;
    }
   }
  }
}


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
.intereaction {
  width: auto;
  #options.options {
    i.options-icon {
        display: none !important;
    }
  }
}


&.create-task{
  &.active{
    background-color: ${props => props.theme.selectedTask};
  }
  &:hover{
    .intereaction{
      background-color: ${props => props.theme.leftColumn} !important;
    }
  }
  i.task-icon{
    cursor: pointer;
  }
  .task-title {
    color: ${props => props.theme.primary};
  }
  .intereaction{
    width: 60px;
    background-color: ${props => props.theme.leftColumn} !important;
    i{
      font-size: 24px;
      font-weight: 400;
    }
  }
  
  label{
    margin: 0;
    input {
      padding-left: 5px;
      width: 130px;
      border: none;
      background-color: ${props => props.theme.transparent} !important;
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

export const TodoDetailHeadWrapper = styled.div`
  width: 100%;
  min-height: 55px;
  background-color: ${props => props.theme.white};
  .task-title {
    font-weight: 400;
    font-style:normal;
    font-size: 14px;
    line-height: 16px;
    &:hover{
      background-color: ${props => props.theme.secondary};
    }
  }
  label{
    margin: 0;
    input {
      width: 205px;
      border: none;
      border-bottom: 1px solid ${props => props.theme.info};
      font-weight: 400;
      font-style:normal;
      font-size: 14px;
      line-height: 16px;
      background-color: ${props => props.theme.transparent};
      &.deactivate{
        border-bottom: 1px solid ${props => props.theme.danger} !important;
      }
      &::placeholder{
        font-weight: 400;
        font-style:normal;
        font-size: 14px;
        line-height: 16px;
      }
      &:focus{
        outline: none;
        // border-bottom: 1px solid ${props => props.theme.info};
      }
    }
  }
`

export const ExitDeleteWrapper = styled.div`
width: 90%;
height: 40px;
position: absolute;
bottom: 10px;
font-weight: 400;
font-style:normal;
font-size: 12px;
line-height: 15px;
color: #666666;
background-color: ${props => props.theme.leftColumn};
border-top: 1px solid #666666d0;
i{
  cursor: pointer;
}
.close{
  font-size: 18px;
  line-height: 21px;
}
.trash{
  font-size: 18px;
  line-height: 21px;
&:hover{
  color: ${props => props.theme.danger};
  }
}
`