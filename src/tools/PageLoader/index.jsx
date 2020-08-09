import React, { Fragment } from 'react'
import Loader from 'react-loader-spinner'
import { Wrapper } from './styles'

const index = props => {
  return (
    <Fragment>
       {props.loading ? <Wrapper>
        <Loader
          type='Rings'
          color='#3e69e4'
          height={200}
          width={200}
        />
      </Wrapper> : null}
    </Fragment>
  )
}

export default index
