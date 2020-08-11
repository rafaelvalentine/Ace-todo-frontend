import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Nav as NavWrapper } from './styles'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { handleUserLogout } from '../../store/actions'
import '../../themes/sass/components/navbar.sass'

export default () => {
  const dispatch = useDispatch()
  const User = useSelector(state => state.User.data)
  return (

    <NavWrapper>
      <Navbar className='w-100' variant='dark' expand='lg'>
        {User['_id'] && User['token'] ? <Navbar.Brand href='/'>To-do</Navbar.Brand> : <Navbar.Brand href='/'>Ace Todo App</Navbar.Brand>}

        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto pr-5'>
            <NavLink exact to='/' activeStyle={{
              fontWeight: 'bold',
              color: 'white'
            }}
              className=' _nav-link mr-3'>
              <span className='mdi mdi-home-variant-outline mr-1 ' />
              Home
            </NavLink>
            {User['_id'] && User['token']
              ? null
              : <NavLink exact to='/register' activeStyle={{
                fontWeight: 'bold',
                color: 'white'
              }}
                className=' _nav-link mr-3'>
                <span className='mdi mdi-account-plus mr-1' />
              Register
              </NavLink>
            }

            {User['_id'] && User['token']
              ? null
              : <NavLink exact to='/login' activeStyle={{
                fontWeight: 'bold',
                color: 'white'
              }}
                className='_nav-link mr-3'>
                <span className='mdi mdi-fingerprint mr-1' />
              Login
              </NavLink> }

            {User['_id'] && User['token']
              ? <NavLink exact to='/dashboard' activeStyle={{
                fontWeight: 'bold',
                color: 'white'
              }}
                className=' _nav-link mr-3'>
                <span className='mdi mdi-view-week-outline mr-1' />
              Dashboard
              </NavLink> : null}

            {User['_id'] && User['token']
              ? <NavLink exact to='/' activeStyle={{
                fontWeight: 'bold',
                color: 'white'
              }}
              onClick={() => {
                dispatch(handleUserLogout())
                sessionStorage.clear()
              }}
              className=' _nav-link mr-3'>
                <span className='mdi mdi-logout mr-1' />
              Logout
              </NavLink>
              : null }

            <NavLink exact to='/more' activeStyle={{
              fontWeight: 'bold',
              color: 'white'
            }}
              className=' _nav-link mr-3'>
              <span className='mdi mdi-telegram mr-1' />
              Other Apps
            </NavLink>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </NavWrapper>

  )
}
