import {connect} from 'react-redux';
import {logout} from '../../actions/session_actions';
import MainNav from './main_nav';


const mapStateToProps = (state)=>{
  return {
    currentUser: state.entities.users[state.session.currentUser]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: ()=> dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainNav);
