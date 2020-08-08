import React, { useState, useEffect, useRef } from 'react'
import Button from '../button'
import useWindowDimensions from '../../tools/windowsize'
import { size } from '../../utils/device'
import { Tasks, CreateTask } from '../../utils/sidebar'
import { Wrapper, LeftColumn } from './styles'

const Sidebar = ({ children, ...props }) => {
  /**
   * here i am using useState to toggle the dropdown
   */
  // const [dropDown, setDropDown] = useState(false)
  const [activeClass, setActiveClass] = useState(false)
  const { width } = useWindowDimensions()

  useEffect(() => {
    if (parseInt(size.mobileL.trim()) < Number(width)) {
      setActiveClass(true)
    } else {
      setActiveClass(false)
    }
  }, [])

  /**
 * Hook that alerts clicks outside of the passed ref
 */
  function useOutsideAlerter (ref) {
  /**
   * Alert if clicked on outside of element
   */
    function handleClickOutside (event) {
      if (ref.current && !ref.current.contains(event.target)) {
        if (parseInt(size.mobileL.trim()) < Number(width)) {
          return
        }
        return setActiveClass(false)
      }
    }

    useEffect(() => {
    // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
      // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside)
      }
    })
  }
  const wrapperRef = useRef(null)
  useOutsideAlerter(wrapperRef)
  return (

  // {/** <!--  BEGIN SIDEBAR  --> */}
    <Wrapper>
      <LeftColumn ref={wrapperRef}
        id='leftColumn'
        className={`leftColumn ${!activeClass ? 'leftColumn-exited align-items-center' : 'leftColumn-entered align-items-start '} d-flex flex-column justify-content-start pt-3`}>
        <Button
          className={`hamburger  ${activeClass ? 'ml-3' : ''}`}
          width='32px'
          height='32px'
          backgroundColor='transparent'
          color='priamry'
          margin='0'
          onClick={() => setActiveClass(!activeClass)}
        >
          <i className='mdi mdi-menu' />
        </Button>
        <div className='w-100'>
          <Tasks tasks={props.tasks} />
          <CreateTask openSidebar={()=> setActiveClass(true)} />
        </div>

      </LeftColumn>
      <div id='overlay' className={`overlay ${activeClass ? 'active' : ''}`} />
    </Wrapper>
  // {/**  <!--  END SIDEBAR  --> */}
  )
}

Sidebar.defaultProps = {
  tasks: [
    {
      _id: Math.random(),
      icon: '',
      title: 'My Day',
      default: true,
      completed: 0
    },
    {
      _id: Math.random(),
      icon: '',
      title: 'My Project',
      completed: 3
    },
    {
      _id: Math.random(),
      icon: '',
      title: 'lorem ipsum los deo das vintos',
      completed: 0
    },
    {
      _id: Math.random(),
      icon: '',
      title: 'My Project',
      completed: 3
    },
    {
      _id: Math.random(),
      icon: '',
      title: 'My Project',
      completed: 3
    }, {
      _id: Math.random(),
      icon: '',
      title: 'My Project',
      completed: 3
    },
    {
      _id: Math.random(),
      icon: '',
      title: 'My Project',
      completed: 3
    },
    {
      _id: Math.random(),
      icon: '',
      title: 'My Project',
      completed: 3
    }
  ]
}
export default Sidebar
