import styled from 'styled-components'
// import { device } from '../device'

export const Wrapper = styled.section`
width: 100%;
height:100%;
label{
  color: ${props => props.theme.taskText} !important;
  margin-top: 5px;
  border-bottom: 1px solid ${props => props.theme.defaulfIcon};
  &.password{
    .input-group{
      width:320px;
    }
  }
  input {
    padding-left: 5px;
    font-size: 14px;
    line-height:16px;
    color: ${props => props.theme.taskText} !important;
    outline: none !important;    
    border: 1px solid ${props => props.theme.transparent};
    background-color: ${props => props.theme.white} !important;
    &.password{
      width: calc(320px - 23px);
    }
  } 
}

`

