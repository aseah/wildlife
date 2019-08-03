export const RECEIVE_ARTIST = 'RECEIVE_ARTIST'
export const RECEIVE_ALL_ARTISTS = 'RECEIVE_ALL_ARTISTS'


const receiveAllArtists = artists => {
    return {
        type: RECEIVE_ALL_ARTISTS,
        artists
    }
}

const receiveArtist = artist => {
    return {
        type: RECEIVE_ARTIST,
        artist
    }
}


export const fetchallArtists = () => dispatch => {
    return ArtistAPIUtil.fetchAllArtists()
        .then(artists => dispatch(receiveAllArtists(artists)))
}

export const fetchArtist = id => dispatch => {
    return ArtistAPIUtil.fetchArtist(id)
        .then(artist => dispatch(receiveArtist(artist)))
}
