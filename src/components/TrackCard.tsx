interface Track {
    snippet: string;
    track: {
      artists: [{ artist: {} }],
      key: string;
      layout: string;
      share: {
        subject: string,
        text: string,
        href: string,
        image: string,
        twitter: string,
      }
      subtitle: string;
      title: string;
      type: string;
      url: string;
    }
  }
  interface Props {
    track: Track;
  }
  const TrackCard: React.FC<Props> = ({ track }) => {
    return (
        <div className="track-card-container">
            <div className="track-card" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <img src={track.track.share.image} alt={track.track.title} className="track-image" style={{width: '120px', height: '120px'}} />
            <h3 className="track-title">{track.track.title}</h3>
            <p className="track-subtitle">{track.track.subtitle}</p>
            <a href={track.track.url}>View on Shazam</a>
            </div>
        </div>
    );
  };

  export default TrackCard