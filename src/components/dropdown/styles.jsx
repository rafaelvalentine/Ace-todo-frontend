import styled from 'styled-components'
import { device } from '../device'

export const NavDropDown = styled.div`
width: 160px;
min-height:80px
padding: 16px 8px;
position: absolute;
top: 55px;
right:80px;
background: ${props => props.theme.white};
box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
border-radius: 2px;
z-index: 5;
`
export const NavOptions = styled.article`
width: 100%;
display: flex;
justify-content: flex-start;
align-items: center;
padding: 8px;
margin: 8px 0;
cursor: pointer;
transition: .3s;
:hover{
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
}
img{
  width: 16px;
  height: 16px;
  margin-right: 8px;
}
span{
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 14px;
  color: ${props => props.theme.title}
}
`
export const SortDropDown = styled(NavDropDown)`
width: 188px;
min-height:0;
max-height: 190px;
padding:0;
top: 48px;
right:-55px;
border-radius: 4px;
`
export const ConnectDropDown = styled(NavDropDown)`
width: 90px;
// height: 60px;
min-height: 50px;
right: 10px;
top: 96%;
padding: 3px;
background: #FFFFFF;
box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.16);
border-radius: 4px;
&.profileconnectdropdown{
  width: 120px;
  top: 30%;
  right: 40px;
}
`

export const ConnectOptions = styled(NavOptions)`
width: 84px;
height: 20px;
background: #F7F7F7;
border-radius: 2px;
/* identical to box height */
span{
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 14px;
  color: #000000;
}
:hover{
  background: ${props => props.theme.green};
  span{
    color: #FFFFFF !important;
  }
}
&.profileconnectdropdown{
  width: 100%;
}
`
export const SortOptions = styled(NavOptions)`
padding: 12px 20px;
border-top: 1px solid #F1F2F7;
border-bottom: 1px solid #F1F2F7;
margin:0;
span{
color: ${props => props.theme.cardName};
}
`

export const MilestonesDropDown = styled(NavDropDown)`
width: 165px;
min-height: 0;
max-height:250px
top: 48px;
right:100px;
left:-50px;
border-radius: 4px;
text-align:left;
&::after{
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent ${props => props.theme.label} transparent;
}
@media ${device.desktop}{
  right:200px;
}
`
export const Milestones = styled(NavOptions)`
padding: 5px 10px;
border-top: .5px solid transparent;
border-bottom: .5px solid transparent;
margin:0;
text-align:left;
text-transform:capitalize;
:hover{
  box-shadow: none;
}
span{
  text-align:left;
  font-size: 12px;
  line-height: 16px;
  color: ${props => props.theme.cardName};
}
`





export const NotificationDropdown = styled.div`
width: 160px;
min-height:80px;
padding: 8px;
position: relative;
background: ${props => props.theme.transparent};
z-index: 5;
`

export const NotificationToggle = styled.p`
  font-size: 15px;
  margin:0;
  text-transform: uppercase;
  text-align: center;
  i{
    margin:0 5px;
  }
  &:hover{
    color:${props => props.theme.warning};
    cursor: pointer;
  }
`

export const NotificationMenu = styled.div`
width: 100%;
max-height: 200px;
overflow: auto;
position: absolute;
top: 30px;
background: ${props => props.theme.white};
box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
padding: 5px 0 10px;
`
export const NotificationOptions = styled.article`
width: 100%;
height: 64px;
padding: 8px;
cursor: pointer;
transition: .3s;
:hover{
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
}
img{
  width: 16px;
  height: 16px;
  margin-right: 8px;
}
p{
  margin: 0;
}
p.title {
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  color: ${props => props.theme.header};
}
p.content {
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 12px;
  color: ${props => props.theme.subHeader};
}
span{
  font-style: normal;
  font-weight: bold;
  font-size: 8px;
  line-height: 11px;
  color: ${props => props.theme.header};
}
`





export const TaskDropdown = styled(NotificationDropdown)`
background: ${props => props.theme.transparent};
width: 24px;
min-height: 10px;
height: 24px;
z-index: 0;
position: none;
`

export const TaskToggle = styled(NotificationToggle)`
width: 100%;
text-align: right;
color: ${props => props.theme.defaultIcon} !important;
z-index: 0;
i{
    cursor: pointer;
    z-index: 0;
    color: ${props => props.theme.defaultIcon} !important;
    &:hover{
      color: ${props => props.theme.primary} !important;
    }
  }
`

export const TaskMenu = styled(NotificationMenu)`
width: 120px;
min-height: 40px;
box-shadow: 0px 8px 16px #DCDCDC;
border-radius: 8px;
overflow: hidden;
top:0;
right: 0;
z-index: 0;
&.last{
  top: -0px;
}
@media only screen and ${device.tablet} {
  width: 200px;
  &.last{
  top: -8px;
}
}
@media only screen and ${device.laptop} {
}
`

export const TaskOptions = styled(NotificationOptions)`
height: 24px;
z-index: 6;
&:hover{
  box-shadow: 0px ;
  background-color: ${props => props.theme.secondary};
}
.title{
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
}
&.edit{
  i{
    color: ${props => props.theme.defaultIcon} !important;
  }
}
&.delete{
  i,
  p.title{
    color: ${props => props.theme.danger} !important;
  }
}
@media only screen and ${device.tablet} {
  height: 28px;
}
@media only screen and ${device.laptop} {
}
`