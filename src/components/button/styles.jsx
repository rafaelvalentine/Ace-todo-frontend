import styled from 'styled-components'

export const Container = styled.div`
    margin:${props => props.margin};
    width: ${props => props.width};
    height: ${props => props.height};
    border-radius:${props => props.borderRadius};
    border: 1px solid ${props => props.theme.transparent};
    text-align: center;
    font-style: normal;
    font-weight: bold;
    font-size: ${props => props.fontSize};
    line-height: 21px;
    cursor: pointer;
    color: ${props => props.color ? props.theme[props.color] || props.color : props.theme.white};
    background-color: ${props => props.backgroundColor ? props.theme[props.backgroundColor] || props.backgroundColor : props.theme.primary};
    transition: .3s;
    display:flex;
    justify-content:center;
    align-items:center;
    &[disabled]{
      opacity: .5;
    }
`
Container.defaultProps = {
  width: '320px',
  margin: '24px auto',
  height: '50px',
  borderRadius:'2px',
  fontSize: '12px'
}
