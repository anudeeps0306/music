import react from 'react';

interface Artist {
    adamid: string;
    avatar: string;
    name: string;
    verified: boolean;
    weburl: string;
  }
  interface Props {
    artists: Artist;
  }

  const ArtistCard: React.FC<any> = ({ artists }) => {
    // {console.log((JSON.stringify(artist, null, 4)))}
    {console.log(artists.artist.avatar)}
    return (
      <div className="artist-card">
        <img src={artists.artist.avatar} alt={artists.artist.name} />
        <h2>{artists.artist.name}</h2>
        <a href={artists.artist.weburl}>View on Apple Music</a>
      </div>
    );
  };

  export default ArtistCard