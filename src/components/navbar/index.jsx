import React from 'react'
import { NavLink } from 'react-router-dom'
import { Nav as NavWrapper } from './styles'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import '../../themes/sass/components/navbar.sass'

export default () => {
  return (

    <NavWrapper>
      <Navbar variant='dark' expand='lg'>
        <Navbar.Brand href='/'>Ace Todo App</Navbar.Brand>
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

            <NavLink exact to='/register' activeStyle={{
              fontWeight: 'bold',
              color: 'white'
            }}
            className=' _nav-link mr-3'>
              <span className='mdi mdi-account-plus mr-1' />
              Register
            </NavLink>
            <NavLink exact to='/login' activeStyle={{
              fontWeight: 'bold',
              color: 'white'
            }}
            className='_nav-link mr-3'>
              <span className='mdi mdi-fingerprint mr-1' />
              Login
            </NavLink>
            <NavLink exact to='/dashboard' activeStyle={{
              fontWeight: 'bold',
              color: 'white'
            }}
            className=' _nav-link mr-3'>
              <span className='mdi mdi-view-week-outline mr-1' />
              Dashboard
            </NavLink>
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
