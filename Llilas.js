const fs = require("fs").promises;

// fs.readFile('./data.json', 'utf8', (err,data) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// console.log(JSON.parse(data));
// });

fs.readFile('./data.json')
    // .then( data => {
    //     console.log(JSON.parse(data))
    // })
    // .catch( err => {
    //     console.log(err);
    //     throw err;
    // })

async function readDataFromFile() {
   try {
       const data = await fs.readFile('./data.json', 'utf8');
       console.log(JSON.parse(data));
   }
   catch (err){
       console.log("Error while reading file"+ err);
       throw err;
   }
}
readDataFromFile();

function getRandomDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            const dogImageElement = document.getElementById('dogImage');
            dogImageElement.src = data.message;
        })
        .catch(error => {
            console.error('Error fetching dog image:', error);
        });
}