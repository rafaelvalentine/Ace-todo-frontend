import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { Header } from '../../themes/style/typeface'
import RegisterForm from '../../utils/register'
import swal from 'sweetalert'
import validator from 'validator'

export default class index extends Component {
  state={
    password:'',
    username:'',
    email:'',
    loading:false
  }
  handleChange = e=>{
    const {name, value } = e.target
    this.setState({[name]: value})
  }
  handleUserRegister = () =>{
    const {username, password, email} = this.state
    const { history } = this.props
    if (validator.isEmpty(username)) {
      swal('', 'Please username is required', '')
      return
    }
    if (validator.isEmpty(email)) {
      swal('', 'Please email is required', '')
      return
    }
    if (validator.isEmpty(password)) {
      swal('', 'Please password is required', '')
      return
    }
    if (!validator.isEmpty(password)) {
      if (password.length < 8) {
        swal('', 'Password must be at least 8', '')
      return
      }
      if (password.length > 16) {
        swal('', 'Password must be at less 16', '')
      return
      }
    }
    this.setState({loading: true})
    this.props.handleUserRegister({username, password, email})
    .then(res=>{
      if(res.status !==200){
        this.setState({ loading: false })
        swal('Ooops!', `${(res.errMessage || res.message )|| 'Something went wrong!'}`, 'error')
        return 
      }
      this.setState({loading: false}, ()=> history.push('/dashboard'))
    })
  }

  componentDidMount(){

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
          <RegisterForm {...this.state} onChange={this.handleChange} handleUserRegister={this.handleUserRegister}/>
        </div>
      </>
    )
  }
}
