import React from 'react'
import { TodoHeader, TodoBody } from './utils'
import { Wrapper } from './styles'

export default props => {
  return (
    <Wrapper>
      <TodoHeader />
      <TodoBody setActiveClass={value => props.setActiveClass(value)} />
    </Wrapper>
  )
}
