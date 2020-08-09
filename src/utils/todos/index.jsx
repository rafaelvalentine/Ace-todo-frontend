import React from 'react'
import { TodoHeader, TodoBody } from './utils'
import { Wrapper } from './styles'

export default () => {
  return (
    <Wrapper>
      <TodoHeader />
      <TodoBody />
    </Wrapper>
  )
}
