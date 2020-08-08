import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
// import { SelectedTeamResultCard } from '../../components/card'
import {LeftColumn } from '../../components/sidebar'
import '../../themes/sass/pages/Dashboard.sass'

export default class index extends Component {

  state = {

  }


componentDidMount(){

}
  render () {
    return (
      <>
        {/* this component handles setting the title and dynamically injecting head specific tags */}
        <Helmet>
          <meta charSet='utf-8' />
          <title>Ace App || Dashboard Page</title>
        </Helmet>
       <div id='page_dashboard'>
        <LeftColumn />
       </div>
      </>
    )
  }
}
