var faker = require('faker');




var randomName = faker.name.findName(); // Rowan Nikolaus
var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
var randomCard = faker.helpers.createCard(); // random contact card containing many properties


//  dsd"'""ddffffhhhhhhhhhhhdhhdhddhdhh

// console.log(randomName);
// console.log(randomEmail);
// console.log(randomCard);

for (let index = 0; index < 12; index++) {
    console.log( faker.commerce.productName()+" - "+  faker.commerce.price());
    
}

