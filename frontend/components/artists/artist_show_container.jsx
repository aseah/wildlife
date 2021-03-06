import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'
import { fetchArtist } from '../../actions/artist_actions';
import ArtistShow from './artist_show';
import { createPlaylisting } from '../../util/playlisting_api_util';
import { receiveQueue } from '../../actions/musicplayer_actions';

const msp = (state, ownProps) => {
    let artistId = ownProps.match.params.artistId
    let artist = state.entities.artists[artistId] || {name: "", photo_url: "", album_ids: []}
    let albums = []
    let songs = []
    
    artist.album_ids.forEach(album_id => {
            let album = state.entities.albums[album_id]
            if (typeof album !== 'undefined') {albums.push(album)}
            // safety first
            if (album) {
                album.song_ids.forEach(song_id => {
                    let song = state.entities.songs[song_id]
                    
                    if (typeof song!== 'undefined') songs.push(song)
                    }
                )
            }
        }
    )
    
    
    return {
        artist,
        albums,
        songs,
    }
}

const mdp = dispatch => {
    return {
        fetchArtist: id => dispatch(fetchArtist(id)),
        // createPlaylisting: playlisting => dispatch(createPlaylisting(playlisting))
        receiveQueue: (songs, currId) => dispatch(receiveQueue(songs, currId))
    }
}

export default withRouter(connect(msp, mdp)(ArtistShow))

