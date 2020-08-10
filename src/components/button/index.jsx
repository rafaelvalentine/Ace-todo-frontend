import React from 'react'
import Spinner from 'react-bootstrap/Spinner'
import * as ButtonStyle from './styles'

const Button = ({ animation, children, content, loading, message, onClick, size, variant, disabled, ...props }) => {
  return (
    <ButtonStyle.Container disabled={disabled} onClick={onClick} {...props}>
      { loading
        ? <span>
          <Spinner
            as='span'
            variant={variant || 'light'}
            animation={animation || 'border'}
            size={animation || 'sm'}
            role='status'
            aria-hidden='true'
          />
          <bdi className='ml-2'>{ message ? typeof message === 'string' ? message : 'Loading...' : null }</bdi>
        </span>
        : children || content }
    </ButtonStyle.Container>
  )
}

export default Button
