import React from 'react'
import Button from '../../components/button'
import { Main } from '../../components/input'
import * as Page from './styles'

// this Component house both light and dark themes for login form
export default ({ email, onChange, username, password, loading, ...props }) => {
  return (
    <Page.Wrapper className='d-flex flex-column justify-content-center align-items-center'>
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
        type='password'
      />
      <Button
        width='120px'
        height='35px'
        content='Login'
        loading={loading}
        className='mt-3'
        margin='0' />
    </Page.Wrapper>
  )
}
