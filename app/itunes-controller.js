function ItunesController(){
  var itunesService = new ItunesService()
  //Do Not Modify the getMusic function
  this.getMusic = function getMusic(e){
    console.log(e.target.artist.value)
    e.preventDefault();
    var artist = e.target.artist.value;
    itunesService.getMusicByArtist(artist).then(draw); //after get music by artist returns what are you doing with the objects?
  }

  //Start coding here
  function draw(songList){
  console.log(songList[0])
    var template = ""
    for(var i = 0; i < songList.length; i++){
      var song = songList[i]
      template += `
       <div class="row">
        <div class="col-xs-12 body">
            <h2>${song.title}</h2>
            <img src="${song.albumArt}" alt="${song.collectionName}" height="100" width="100">
            <h3>Artist: ${song.artist}/h3>
            <h4>Album: ${song.collection}</h4>
            <h5>$${song.price}</h5>
            <audio class="audio" controls="controls" src="${song.preview}"></audio>
        </div>
    </div>
      `
    }
    document.getElementById("songs").innerHTML = template
  }
}
  


