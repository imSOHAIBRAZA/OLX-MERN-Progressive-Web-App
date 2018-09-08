const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//** USER MODEL **//
// ** MODEL is like a TABEL and Ad is table name**//

// Create Schema
const adSchema = new Schema({
    title: { type: String, required: "Enter title" },
    category: { type: String, required: "Select a category" },
    description: { type: String, required: "Enter Description" },
    price: { type: Number, required: "Enter price" },
    address: { type: String, required: true },
    name: { type: String, required: "Enter Name" },
    city: { type: String, required: "Enter city" },
    email: { type: String },
    phone: { type: Number, required: "Enter Phone Number" },
    // favorite: { type: Boolean },
    file: { type: String },
    created_date: { type: Date, default: Date.now }
});

var AdModel = mongoose.model('AdModel', adSchema);

// var newUser = new User({
//     name: 'Sohaib Raza',
//     email: ' Sohaibraza@gmail.com ',
//     password: '1234'
// });

// newUser.save().then((doc) => {
//     console.log('Save Data', doc);
// }, (e) => {
//     console.log('Unable to Save data');
// });






// var newAd = new AdModel({
//     title: '3 Marla Home For Sale',
//     category:'Property',
//     description: "4 Bhk Spacious Flat On Jhotwara Road With Lift N Parking",
//     price:"30,0000",
//     address:"Faisalabad",
//     city:"Faisalabad",
//     email: ' Sohaibraza@gmail.com ',
//     phone: '03316095789',
//     price:"30,0000",

// });

// newAd.save().then((doc) => {
//     console.log('Save Data', doc);
// }, (e) => {
//     console.log('Unable to Save data');
// });

module.exports = { AdModel };




  