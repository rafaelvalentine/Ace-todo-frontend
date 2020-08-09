import Home from '../../pages/home'
import { connect } from 'react-redux'
import { handlePageLoader  } from '../../store/actions'

/**
 * here we handle passing redux to our component and export
 */
const mapStateToProps = state => ({
  Results: state.Results.data.games.game
})

const mapDispatchToProps = dispatch => ({
  handlePageLoader: value => dispatch(handlePageLoader(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
