const fs = require("node:fs");
// creo un archivo
fs.writeFile(`test.txt`,"hello word", (err) => {   // (err): aca estoy usando callback function
 if(err){
    console.error(err);
    return;
 }
 console.log('File has been created');
});

// ahora leo lo que tiene
fs.readFile(`test.txt`,"utf-8", (err, data) => {
if(err){
   console.error(`Error while read file`,err); // tengo muchas opciones de errores
   retrun;
}
console.log(`content:`, data); // si no tengo error quiere ver el contenido del data
});
// ahora vamos a leer html template