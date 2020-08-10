import Dashboard from '../../pages/dashboard'
import { connect } from 'react-redux'
import { handleFetchUserDetails, handleFetchTasks } from '../../store/actions'

/**
 * here we handle passing redux to our component and export
 */
// const mapStateToProps = state => ({
//   Result: state.SelectedResult.data.boxscore
// })

const mapDispatchToProps = dispatch => ({
  handleFetchUserDetails: () => dispatch(handleFetchUserDetails()),
  handleFetchTasks: ()=> dispatch(handleFetchTasks())
})

export default connect(null, mapDispatchToProps)(Dashboard)
