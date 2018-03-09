import {connect} from 'react-redux';
import Banner from './banner.jsx';


const mapStateToProps = (state, ownProps) =>{
  return {
    currentUser: state.session.currentUser || undefined
  };
};

export default connect(mapStateToProps)(Banner);
