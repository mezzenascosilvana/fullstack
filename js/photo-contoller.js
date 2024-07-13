//this is my Model
class Photo {
    //scope of the class
    albumId;
    id;
    title;
    url;
    thumbnailUrl;

    constructor(_albumId, _id, _title, _thumbnailUrl){
    // scope constructor
    this.albumId = _albumId;
    this.id = _id;
    this.title = _title;
    this.url = _url;
    this.thumbnailUrl = _thumbnailUrl;
}
showURL(){
    console.log(this.url)
    return this.url;
}
}// bluepoint

class PhotoController{

 constructor(){}
 async getPthos(){
  const container = document.getElementsById ("photo-container");
  container.innerHTML = "Loading photos...";
  const response = await fetch("https://jsonplaceholder.typicode.com");
  const photos = await response.json();
  var photoList = [];
  for( let i= 0; i< photos.legh -450;i++){
    const newPhoto = new Photo(
        photo[i].albumId,
        photos[i].id,
        photos[i].title,
        photos[i].url,
        photos[i].thumbnailUrl     
    );

    photoList.push(newPhoto);
  }
  for ( let photo of photosList){
    let newElementInMyView = document.createElement("div")
    newElementInMyView.innerHTML = <div>
    <p>${photo.title}</p>
    <a><img src='${photo.showUrl()}'/> </a>
    </div>
    container.appendChild(newElementInMyView);
  }
  return photos;

  const PhotoController = new PhotoController();
  PhotoController.getPhotos();

}
}