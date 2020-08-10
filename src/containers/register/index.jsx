import Register from '../../pages/register'
import { connect } from 'react-redux'
import { handleUserRegister } from '../../store/actions'

/**
 * here we handle passing redux to our component and export
 */
// const mapStateToProps = state => ({

// })

const mapDispatchToProps = dispatch => ({
  handleUserRegister: data => dispatch(handleUserRegister(data))
})

export default connect(null, mapDispatchToProps)(Register)