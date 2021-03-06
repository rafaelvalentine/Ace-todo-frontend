import React from 'react'
import Button from '../../components/button'
import { Main } from '../../components/input'
import * as Page from './styles'

// this Component house both light and dark themes for login form
export default ({ email, onChange, username, password, loading, handleUserRegister, ...props }) => {
  return (
    <Page.Wrapper className='d-flex flex-column justify-content-center align-items-center'>
      <Main
        className='username'
        placeholder='Enter Username'
        label='Username'
        name='username'
        value={username}
        onChange={onChange}
        type='text'
      />
      <Main
        className='email'
        placeholder='Enter Email'
        label='Email'
        name='email'
        value={email}
        onChange={onChange}
        type='email'
      />
      <Main
        className='password'
        placeholder='Enter Password'
        label='Password'
        name='password'
        value={password}
        onChange={onChange}
        append='true'
        type='password'
      />
      <Button
        width='120px'
        height='35px'
        content='Register'
        onClick={handleUserRegister}
        loading={loading}
        disabled={loading}
        className='mt-3'
        margin='0' />
    </Page.Wrapper>
  )
}
