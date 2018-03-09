import { Link } from 'react-router-dom';
import React from 'react';
import TrackIndexList from '../tracks/track_index_list';

class User extends React.Component {

  componentDidMount(){
    this.props.fetchUser(this.props.match.params.userId);
  }

  componentWillReceiveProps(nextProps){
    if(this.props.match.params.userId !== nextProps.match.params.userId){
      this.props.fetchUser(nextProps.match.params.userId);
    }
  }

  render(){
    const {user, tracks, currentUser} = this.props;



    return (
      <div className="user-body">
        <div className="user-banner">
          <img src={user.avatar_url} className="user-port"/>
          <img src={user.banner_url} className="user-banner-image"/>
        </div>
        <div className="main-container-left">
          <TrackIndexList tracks={tracks}/>
        </div>
      </div>
    );
  }
}

export default User;
