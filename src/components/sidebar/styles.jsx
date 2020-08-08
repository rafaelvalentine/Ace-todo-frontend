import styled from 'styled-components'
import { device } from '../../utils/device'

export const Wrapper = styled.div`
#overlay.overlay{
    position: absolute;
    top: 0;
    bottom: 0;
    background: black;
    z-index: 1 !important;
    opacity: .23;
    &.active{
      width: 100vw;
      height: 100vh;
    }
}
@media only screen and ${device.tablet} {
  #overlay.overlay{
    display: none;
  }
}
@media only screen and ${device.laptop} {
}
`
export const LeftColumn = styled.section`
height: 100vh;
position: absolute;
top: 1px;
bottom: 0;
background: ${props => props.theme.leftColumn};
transition: .3s;
z-index:5;
&.leftColumn-entered{
  width: 220px;
  #task.task{
    justify-content: flex-start !important;
    .task-title,
    .intereaction {
      display: initial !important;
      &.intereaction{
        display: flex !important;
      }
    }
  }
}
&.leftColumn-exited{
    width: 50px;
  #task.task {
    justify-content: center !important;
    .task-title,
    .intereaction {
      display: none !important;
    }
  }
  .create-task{
      border-top: 1px solid #eaeaea;
      border-bottom: 1px solid #eaeaea;
  }
}
.hamburger{
  &:hover {
    background-color: ${props => props.theme.white};
  }
  i{
    color: ${props => props.theme.primary};
    font-size: 24px;
  }
}

@media only screen and ${device.tablet} {
  position: relative;
  &.leftColumn-entered{
    width: 290px;
  }
}
@media only screen and ${device.laptop} {
}
`