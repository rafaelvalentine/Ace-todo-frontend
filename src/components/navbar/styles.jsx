import styled from 'styled-components'

export const Nav = styled.div`
width: 100%;
height: auto;
background-color: ${props => props.theme.primary};
display: flex;
justify-content: flex-start;
align-items: center;
padding:0;
.navbar-toggler{
  border: none;
  .navbar-toggler-icon{
    color: ${props => props.theme.white};
  }
  &:hover{
    background-color: ${props => props.theme.info};
  }
}
`
export const SideNav = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 100%; 
width: 60%; /* 0 width - change this with JavaScript */
background-color: ${props => props.theme.transparent};
transition: 0.5s;
margin:0;
a {
  text-decoration: none;
  font-size: 12px;
  line-height: 16px;
  color: ${props => props.theme.title};
}
/* When you mouse over the navigation links, change their color */
 a:hover {
  color: ${props => props.theme.orange};
}
ul {
  display: flex;
  align-items: center;
  list-style: none;
  justify-content: space-between;
  padding:0;
  width:100%;
  margin:0
}

 ul li {
  // margin: 0 5px;
  /* padding: 0 10px; */
  font-size: 14px;
  text-transform: capitalize;
  width: 300px;
  height: 50px;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-wrap:nowrap;
  
}

 ul li a {
  text-decoration: none;
  color: ${props => props.theme.title};
}

 ul li a span {
  // margin: 10px;
  // padding: 0 5px;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  text-transform: capitalize;
}

 ul li.active {
  border-radius: 5px;
  background-color: ${props => props.theme.white};
  color: ${props => props.theme.orange};
  // box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
}

 ul li.active a span {
  color: ${props => props.theme.orange};
  /* font-size: 14px; */
}

 ul li img {
  margin: 0 5px;
  margin-left: 10px;
  width: 20px;
  height: 20px;
}
`

export const AdminWrapper = styled.div`
width: 200px;
height: 40px;
background: ${props => props.theme.gray};
display: flex;
justify-content: space-between ;
align-items: center;
flex-direction: ${props => props.flexDirection ? props.flexDirection : 'row' };
border-radius: 3px;
`
export const DashNav = styled.div`
height: 80px;
width:100%;
background: ${props => props.theme.mainBgColor};
box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
margin:0;
padding 0 40px;

`
