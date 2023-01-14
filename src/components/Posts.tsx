import React from 'react'
import axios, { AxiosRequestConfig } from 'axios';
import {useState,useEffect} from 'react'
import ArtistCard from './ArtistCard'
import TrackCard from './TrackCard';



type Props = {}

interface Data {
  artists: {
    hits: Array<{
      artist: {
        adamid: string;
        avatar: string;
        name: string;
        verified: boolean;
        weburl: string;
      }
    }>
  };
  tracks: {
    hits: Array<{
      snippet: string;
      track: {
        artists: Array<{ artist: {} }>;
        key: string;
        layout: string;
        share: {
          subject: string;
          text: string;
          href: string;
          image: string;
          twitter: string;
        };
        subtitle: string;
        title: string;
        type: string;
        url: string;
      }
    }>
  };
}

const Posts: React.FC<Props> = () => {
    const options: AxiosRequestConfig = {
        method: 'GET',
        url: 'https://shazam.p.rapidapi.com/search',
        params: {term: 'kiss the rain', ale: 'en-US', offset: '0', limit: '5'},
        headers: {
          'X-RapidAPI-Key': 'cdc5759467msh1d3c95c2d5e51dbp15ff6fjsnf40caf25cc62',
          'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        }
    };
    
    const [data, setData] = useState({
      artists: {
        hits: []
      },
      tracks: {
        hits: []
      }
    });
  
    useEffect(() => {
      axios.request<any>(options).then(response => {
          setData(response.data);
        }).catch(error => {
          console.error(error);
        });
      },[]);
  
    return (
      <div className="parent-component">
        {/* <div className="artist-section">
          <h1>Artists</h1>
          {data.artists.hits.map((artist, index) => (
            <ArtistCard key={index} artist={artist}/>
          ))}
        </div> */}
        <div className="track-section" style={{display: 'flex', flexDirection: 'row', overflowX: 'scroll'}}>
          <h1>Tracks</h1>
          {data.tracks.hits.map((track, index) => (
            <TrackCard key={index} track={track} />
          ))}
        </div>
      </div>
    );
}

export default Posts
