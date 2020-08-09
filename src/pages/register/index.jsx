import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { Header } from '../../themes/style/typeface'
import RegisterForm from '../../utils/register'

export default class index extends Component {
  state={
    password:'',
    username:'',
    email:'',
    loading:false
  }
  handleChange = e=>{
    const {name, value } = e.target
    this.setState({[name]: value}, ()=>console.log('password', this.state.password))
  }
  render () {
    return (
      <>
        {/* this component handles setting the title and dynamically injecting head specific tags */}
        <Helmet>
          <meta charSet='utf-8' />
          <title>Register Page - Ace App</title>
        </Helmet>
        <div id='page_register' className='d-flex flex-column justify-content-center align-items-center pt-5'>
          <Header className='text-center'>Register Form</Header>
          <RegisterForm {...this.state} onChange={this.handleChange}/>
        </div>
      </>
    )
  }
}
