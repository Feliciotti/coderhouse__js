const albums = [
    {name: "A Knight at the Opera", band: "NanowaR of Steel", yearOfRelease: 2014}, 
    {name: "Steel", band: "Battle Beast", yearOfRelease: 2011}, 
    {name: "Balls to the Wall", band: "Accept", yearOfRelease: 1983},  
    {name: "Animalize", band: "KISS", yearOfRelease: 1984},  
    {name: "Ácido Argentino", band: "Hermética", yearOfRelease: 1991},  
    {name: "Mutter", band: "Rammstein", yearOfRelease: 2001} 
]

albums.sort(function (a, b) {
    if (a.yearOfRelease > b.yearOfRelease) {
      return 1;
    }
    if (a.yearOfRelease < b.yearOfRelease) {
      return -1;
    }
    return 0;
  });

  console.log(albums)