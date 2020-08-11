import styled from 'styled-components';

import { device } from '../device';

export const Wrapper = styled.section`
width: calc(100% - 50px);
height: 100%;
margin-left: 50px;
@media only screen and ${device.tablet} {
  width: 100%;
  margin-left: 0px;
}
@media only screen and ${device.laptop} {
}
`

export const TodoHeaderWrapper = styled.div`
width: 100%;
max-width: 100%;
height: 100px;
color: ${props => props.theme.primary} !important;
.top{
  height: 49px;
  .title{
    color: ${props => props.theme.primary} !important;
    text-transform: initial;
  }
  i{
    cursor: pointer;
    &.option{
      color: ${props => props.theme.taskText};
    }
  }
}
.bottom{
    height: 50px;
    max-width: 100%;
    border-bottom: .5px solid ${props => props.theme.secondary};
    &.active{
      border-bottom: .5px solid ${props => props.theme.primary};
    }
    &.deactivate{
      border-bottom: .5px solid ${props => props.theme.danger};
    }
  .task-icon{
      font-size: 24px;
      font-weight:500;
      &.edit-mode{
        color: ${props => props.theme.secondary};
      }
  } 
  .task-title,
  .add-task {
    font-weight:500;
    font-style:normal;
    font-size: 14px;
    line-height: 16px;
    width 100%;
    &.task-title{
      color: ${props => props.theme.primary};
      &::placeholder{
        color: ${props => props.theme.primary};
      }
    }
    &.task-title[disabled]{
      background-color: ${props => props.theme.transparent};
      border: none;
    }
    &.add-task{
      width 30px;
      &:hover{
        cursor: pointer;
        opacity: 1;
      }
    }
  } 
  label{
    margin: 0;
    width: 95%;
    .input-group{
      width: 100%;
      padding-right: 5px;
      input {
      width: 100%;
      border: none;
      font-weight:500;
      font-style:normal;
      font-size: 14px;
      line-height: 16px;
      background-color: ${props => props.theme.transparent};
      padding: 5px 0;
      &.deactivate{
        border: 1px solid ${props => props.theme.danger} !important;
      }
      &::placeholder{
        font-weight:500;
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
  }
} 
@media only screen and ${device.mobileM} {
  
}
@media only screen and ${device.mobileL} {

}
@media only screen and ${device.tablet} {

}
@media only screen and ${device.laptop} {
}
`
export const TodosListWrapper = styled.div`
    width: 100%;
    height: calc(100vh - 155px);
    max-height: calc(100vh - 155px);
    overflow-y: hidden;
 .todo-list-wrapper{
   .todo-list-container{
    max-height: calc(100vh - 155px);
    overflow-y: auto;
    .completed-toggle-wrapper{
      cursor: pointer;
      .toggle-arrow{
        font-style:normal;
        font-size: 20px;
        line-height: 23px;
        color: ${props => props.themedefaultIcon};
        transition: .3s;
        &.toggle{
          transform:rotate(-90deg);
        }
      }
      .toggle-text{
        color: ${props => props.theme.taskText};
        font-style:normal;
        font-size: 16px;
        line-height: 18px;
      }
    }
   }
 }
`
export const BackgroundLines = styled.div`
width: 100%;
height: 100%;
flex: 1;
background: linear-gradient(180deg, white, white 52px, #e5e5e5 52px, #e5e5e5 52px);
background-size: 100% 53px;
box-shadow: inset 0 1px 0 0 #e5e5e5;
`

export const TodoWrapper = styled.div`
  width: 100%;
  height: 100%;
  cursor:pointer !important; 
  border-bottom: .5px solid ${props => props.theme.secondary};
  &.active{
    background-color: ${props => props.theme.selected};
  }
  &:hover:not(.active){
    background-color: ${props => props.theme.secondary};
  }
  .details{
    width: 92%;
    .title{
      font-size: 14px;
      font-weight:500;
      color: ${props => props.theme.taskText};
      position: relative;
      flex: 1 1 0px;
      line-height: 16px;
      cursor: pointer;
      &.done{
        color: ${props => props.theme.done};
      }
    }
    .info{
      font-size: 12px;
      font-weight:500;
      color: ${props => props.theme.done};
      position: relative;
      flex: 1 1 0px;
      line-height: 14px;
    }
  }
`
export const CheckedIcon = styled.span`
    color: ${props => props.theme.primary};
    i{
    font-size: 18px;
  }
`
export const ImportantIcon = styled.span`
    i{
      font-size: 18px;
    }
    .checked{
      color: ${props => props.theme.primary};
    }
`