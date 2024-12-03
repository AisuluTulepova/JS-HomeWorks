const artists=[
    {name:'Michale Jackson', songs: ['Smooth Criminal', 'Billie Jean','Beat It', 'Earth Song']},
    {name:'Billie Eilish', songs: ['Bad Guy', 'Lovely', 'Lunch', 'Chihiro']},
    {name: 'Kairat Nurtas', songs:['Auyrmaydy Zhurek', 'Ol sen emes']}
  ]
  
  artists[2].songs[1] = 'Baika';
  console.log(artists[2].songs[1]);
  
  console.log(artists[0].songs[artists[0].songs.length - 1]);
  console.log(artists.songs);
  
  const shortSongs = artists[1].songs.filter(song => song.length <= 6);
  console.log(shortSongs);