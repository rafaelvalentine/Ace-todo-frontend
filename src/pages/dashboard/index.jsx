import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
// import { SelectedTeamResultCard } from '../../components/card'
import { LeftColumn, RightColumn } from '../../components/sidebar'
import Todo from '../../utils/todos'
import '../../themes/sass/pages/Dashboard.sass'

export default class index extends Component {

  state = {
    activeClass: false,
  }


componentDidMount(){

}
setActiveClass = value =>{
  this.setState({ activeClass: value })
}
  render () {
    return (
      <>
        {/* this component handles setting the title and dynamically injecting head specific tags */}
        <Helmet>
          <meta charSet='utf-8' />
          <title>Dashboard Page - Ace App</title>
        </Helmet>
       <div id='page_dashboard' className='d-flex justify-content-start align-items-start'>
        <LeftColumn />
        <Todo setActiveClass={value => this.setActiveClass(value)}/>
        <RightColumn activeClass={this.state.activeClass} setActiveClass={value => this.setActiveClass(value)} />
       </div>
      </>
    )
  }
}
