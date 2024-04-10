import React, { useEffect, useState } from 'react';

interface Props {
  artist: string;
  song: string;
}

interface SongLyricsObject {
  songLyrics: string;
}

const MusicApi = ({ artist, song }: Props) => {
  const [lyrics, setLyrics] = useState<SongLyricsObject>({ songLyrics: '' });

  const fetchApi = async () => {
    try {
      const response = await fetch(
        'https://api.lyrics.ovh/v1/' +
          encodeURIComponent(artist) +
          '/' +
          encodeURIComponent(song),
      );
      const jsonData = await response.json();
      setLyrics({ songLyrics: jsonData.lyrics });
    } catch (error) {
      console.error('Error while trying to fetch data: ', error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      <ul className='list-group'>
        <li>{lyrics?.songLyrics}</li>
      </ul>
    </>
  );
};

export default MusicApi;
