import Login from '../../pages/login'
import { connect } from 'react-redux'
import { handleUserLogin} from '../../store/actions'


/**
 * here we handle passing redux to our component and export
 */
// const mapStateToProps = state => ({

// })

const mapDispatchToProps = dispatch => ({
  handleUserLogin: data => dispatch(handleUserLogin(data))
})

export default connect(null, mapDispatchToProps)(Login)