import React from 'react';
import {Link} from 'react-router-dom';
import TrackIndexList from './track_index_list';

class TrackIndex extends React.Component {

  componentDidMount(){
    this.props.fetchAllTracks();
  }

  sortByGenre(tracks){
    let genre = {}
    tracks.forEach((track)=>{
      if(genre[track.genre]){
        genre[track.genre].push(track)
      }else{
        genre[track.genre] = [track]
      }
    })
    return genre
  }

  makeList(tracks){
    this.sortByGenre(tracks).values.map((trackList)=>{
      return(
        <TrackIndexList
          style='scroll'
          tracks={trackList}
        />
      )
    })
  }

  render(){
  if(this.props.tracks.length > 0){
    const sorted = Object.values(this.sortByGenre(this.props.tracks))
    const list = sorted.map((trackList)=>{
      return(
        <li className='index-li' key={sorted.indexOf(trackList)}>
          <h1>{trackList[0].genre}</h1>
          <TrackIndexList
            style='scroll'
            tracks={trackList}
            />
        </li>
      )
    })
    return(
      <div className="main-container-left">
        <ul className='index-ul'>
          {list}
        </ul>
      </div>
    );
  }else{
    return null
  }
  }
}

export default TrackIndex;
