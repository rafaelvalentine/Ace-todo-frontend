import React,{ useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import Button from '../button'
import useWindowDimensions from '../../tools/windowsize'
import { size } from '../../utils/device'
import { TodoDetailsHead } from '../../utils/sidebar'
import { ExitDateDelete } from '../../utils/sidebar/utils'
import { Wrapper, RightColumn } from './styles'

const Sidebar = ({ activeClass, setActiveClass, ...props }) => {
  const { width } = useWindowDimensions()
  const Todo = useSelector(state => state.Todo)
  return (

  // {/** <!--  BEGIN SIDEBAR  --> */}
    <Wrapper id='rightColumnWrapper' className={`${activeClass ? 'active' : ''}`} >
      <RightColumn
        id='rightColumn'
        className={`rightColumn ${activeClass ? 'rightColumn-entered align-items-start' : 'rightColumn-exited align-items-center'} d-flex flex-column justify-content-start pt-3 px-3`}
      >
        <TodoDetailsHead {...Todo.selected} />
        <ExitDateDelete setActiveClass={()=> setActiveClass(false)} />
      </RightColumn>
      <div id='overlay' className={`overlay ${activeClass ? 'active' : ''} right`} onClick={() => {
        if (parseInt(size.mobileL.trim()) < Number(width)) {
          return
        }
        setActiveClass(false)
      }} />
    </Wrapper>
  // {/**  <!--  END SIDEBAR  --> */}
  )
}

export default Sidebar
