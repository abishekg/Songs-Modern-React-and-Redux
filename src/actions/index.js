import { SONG_SELECTED } from "./config";



export const selectSong = (song) => {
  console.log(song);
  return {
    type: SONG_SELECTED,
    payload: song
  }
};

