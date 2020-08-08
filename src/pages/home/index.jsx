import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
// import Navbar from '../../components/navbar'
import {Header, SubHeader} from '../../themes/style/typeface'
import { ResultCard } from '../../components/card'
import '../../themes/sass/pages/Home.sass'

export default class index extends Component {

  state={
    data:[

    ]
  }
handleFilterRequest = url => {
  this.props.handlePageLoader(true)
this.props.handleFilterRequest(url)
.then((result) => {
  this.props.handlePageLoader(false)
  this.props.history.push('/dashboard')
  // console.log(result);
}).catch((err) => {
  console.log(err);
});

}
  componentDidMount (){
    this.props.handlePageLoader(true)
    this.props.handleFetchResults()
    .then(results => {
      this.props.handlePageLoader(false)
      // console.log('results: ', results)
    })
  }
  render () {
    return (
      <>
        {/*  this component handles setting the title and dynamically injecting head specific tags */}
        <Helmet>
          <meta charSet='utf-8' />
          <title>Ace App || Home Page</title>
        </Helmet>
        <div id='_home'>
         
          <Header className='text-center' margin='30px auto 5px'>
            Welcome to the Best Todo App on the market
          </Header>
          <SubHeader className='text-center' margin='0 auto'>
            This WebApp enables you to plan your day <br />
            the way you want
          </SubHeader>


         <SubHeader className='text-center' margin='30px auto 10px'>
            Please Login/Register to use the app
         </SubHeader> 
          <div className='container mt-5'>
              <div className='row justify-content-start align-items-center px-5'>
              </div>
          </div> 
        </div>
      </>
    )
  }
}
