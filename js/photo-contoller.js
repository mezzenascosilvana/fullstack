//this is my Model
class Photo {
    //scope of the class
    albumId;
    id;
    title;
    url;
    thumbnailUrl;

    constructor(_albumId, _id, _title,_url, _thumbnailUrl){
    // scope constructor
    this.albumId = _albumId;
    this.id = _id;
    this.title = _title;
    this.url = _url;
    this.thumbnailUrl = _thumbnailUrl;
}

// methods inside class
showUrl(){
  return this.url;            
}
}//blueprint


/***I can create an object  and use the method showURL
var photo = new Photo(
   1,
   1,
   "accusamus beatae ad facilis cum similique qui sunt",
   "https://via.placeholder.com/600/92c952",
   "https://via.placeholder.com/150/92c952"
);
console.log(`photo`,photo);
console.log(`photo`,photo.showUrl());
*******************************************************************/

/**My controles is the responsable to iteract with my view site */
class PhotoController{
  constructor(){}
  async getPhotos(){  // I only add my behaviour ant it should be async because I am usingn the await
   console.log("getPhotos");
   const container = document.getElementById("photo-container");
   container.innerHTML= "Loading photos...";
   const response = await fetch("https://jsonplaceholder.typicode.com/photos"); // I will wait the fetch is completed 
   const photos = await response.json();
   var photoList = [];
   for( let i= 0; i< photos.length -450;i++){ // we dont use the forEach because I want to reduce the number of the photos
     const newPhoto = new Photo(
         photos[i].albumId,
         photos[i].id,
         photos[i].title,
         photos[i].url,
         photos[i].thumbnailUrl     
     );
     photoList.push(newPhoto);
   };
   //console.log(photoList);
   for ( let photo of photoList){
     let newElementInMyView = document.createElement("div");
     newElementInMyView.innerHTML = `<div>
     <p>${photo.title}</p>
     <a><img src='${photo.showUrl()}'/> </a>
     </div>
     `;
     container.appendChild(newElementInMyView); // this  create elements on my HTML dynamically
   }
   return photos;
  } 
 }
   const photoController = new PhotoController();
   photoController.getPhotos();
   
