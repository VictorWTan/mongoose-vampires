require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const path = require('path')
const app = require("liquid-express-views")(express(), {root: [path.resolve(__dirname, 'views/')]})
const PORT = process.env.PORT

const DATABASE_URL = process.env.DATABASE_URL
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(DATABASE_URL, CONFIG)
mongoose.connection
.on('open', () => console.log('Connected to Mongoose'))
.on('close', () => console.log('Disconnected from Mongoose'))
.on('error', (error) => console.log(error))

const {Schema, model} = mongoose

const vampireSchema = new Schema({
    name: {type: String, required: true},
    title: String,
    hair_color: {type: String, default: 'Blonde'},
    eye_color: String,
    dob: {type: Date, default: Date.now},
    loves: [String],
    location: String,
    gender: String,
    victims: {type: Number, min: 0}
})

const Vampire = model('Vampire', vampireSchema)

//runVamps()
async function runVamps() {
  const vampires = await Vampire.create([
        {
        name: 'Count Chocula',
        hair_color: 'brown',
        eye_color: 'brown',
        dob: new Date(1971, 2, 13, 7, 47),
        loves: ['cereal','marshmallows'],
        location: 'Minneapolis, Minnesota, US',
        gender: 'm',
        victims: 2
      },{
        name: 'Dracula',
        dob: new Date(937, 0, 24, 13, 0),
        hair_color: 'brown',
        eye_color: 'blue',
        loves: ['Winona Ryder', 'top hats', 'fancy cloaks', 'handlebar   mustaches'],
        location: 'Transylvania, Romania',
        gender: 'm',
        victims: 1238
      },{
        name: 'Elizabeth Bathory ',
        dob: new Date(1560, 8, 7, 22, 10),
        hair_color: 'brown',
        eye_color: 'brown',
        loves: ['virgin blood', 'fancy cloaks','frilly collars'],
        location: 'Nyírbátor, Hungary',
        gender: 'f',
        victims: 980
      },{
        name: 'Lestat',
        dob: new Date(1760, 11, 9, 18, 44),
        hair_color: 'blonde',
        eye_color: 'blue',
        loves: ['frilly shirtsleeves', 'frilly collars', 'lurking in   rotting mansions', 'Louis'],
        location: 'Auvergne, France',
        gender: 'm',
        victims: 324
      },{
        name: 'Louis de Pointe du Lac',
        dob: new Date(1766, 6, 4, 2, 1),
        hair_color: 'brown',
        eye_color: 'blue',
        loves:['brooding', 'Claudia', 'staring longingly into the   distance'],
        location: 'New Orleans, Louisiana, US',
        gender:'m',
        victims: 150
      },{
        name:'Claudia',
        dob: new Date(1793, 2, 7, 8, 30),
        hair_color: 'blonde',
        eye_color: 'blue',
        loves: ['doll babies', 'ribbons', 'appearing innocent', '  trickery'],
        location: 'New Orleans, Louisiana, US',
        gender: 'f',
        victims: 290
      },{
        name:'Armand',
        dob: new Date(1481, 6, 1, 10, 42),
        hair_color: 'red',
        eye_color: 'brown',
        loves: ['theatre', 'painting', 'velvet robes', 'being tragic'],
        location: 'Kiev, Russia',
        gender: 'm',
        victims: 1045
      },{
        name:'Santino',
        dob: new Date(1465, 6, 1, 10, 42),
        hair_color: 'brown',
        eye_color: 'brown',
        loves: ['trickery', 'vampiric cults', 'fancy cloaks'],
        location: 'Rome, Italy',
        gender: 'm',
        victims: 1103
      },{
        name:'Akasha',
        dob: new Date(-8000, 6, 1, 10, 42),
        hair_color: 'brown',
        eye_color: 'green',
        loves: ['eating hearts', 'bathing in roses', 'elaborate   headdresses', 'R&B music'],
        location: 'Kemet, Egypt',
        gender: 'f',
        victims: 210234,
        title: 'Queen of the Damned'
      },{
        name: 'Edward Cullen',
        dob: new Date(1901, 6, 20, 0, 57),
        hair_color: 'brown',
        eye_color: 'brown',
        loves: ['brooding', 'diamond skin', 'calling people spider   monkeys'],
        location: 'Chicago, Illinois, US',
        gender: 'm',
      },{
        name: 'Persephone Bourignon',
        dob: new Date(1801, 5, 17, 14, 53),
        hair_color: 'red',
        eye_color: 'green',
        loves: ['wine', 'fancy cloaks', 'appearing innocent'],
        location: 'Paris, France',
        gender: 'f',
        victims: 450
      },{
        name: 'René Tremblay',
        dob: new Date(1922, 2, 8, 5, 3),
        hair_color: 'brown',
        eye_color: 'green',
        loves: ['frilly shirtsleeves', 'trickery', 'card games'],
        location: 'Bucharest, Romania',
        gender: 'm',
        victims: 134
      },{
        name: 'Caroline Belmont',
        hair_color: 'blonde',
        eye_color: 'brown',
        dob: new Date(1799, 4, 21, 16, 15),
        loves: ['marshmallows', 'ribbons', 'being tragic'],
        location: 'Ljubljana, Slovenia',
        gender: 'f',
        victims: 567
      },{
        name: 'Francis Frost',
        hair_color: 'black',
        eye_color: 'blue',
        dob: new Date(1976, 6, 18, 18, 18),
        loves: ['brooding', 'frilly shirtsleeves'],
        location: 'New York, New York, US',
        gender: 'm',
        victims: 112
      },{
        name: 'Barnabas Spenser',
        hair_color: 'brown',
        eye_color: 'brown',
        dob: new Date(1984, 6, 3, 13, 12),
        loves: ['being merry', 'being insane', 'card games'],
        location: 'New York, New York, US',
        gender: 'm',
        title: 'Osiris of Sewer Rats'
      }
])
}

let newVamps = [
  {
    name: 'Robert Pattinson',
    hair_color: 'blond',
    eye_color: 'blue',
    dob: new Date(1986, 5, 13, 12, 12),
    loves: ['being a bat', 'making movies'],
    location: 'London, England, UK',
    gender: 'm',
    title: 'the Batman'
  },
  {
    name: 'Christian Bale',
    hair_color: 'blond',
    eye_color: 'blue',
    dob: new Date(1974, 1, 30, 12, 52),
    loves: ['modifying weight'],
    location: 'Haverfordwest, England, UK',
    gender: 'm',
    title: 'American Psycho',
    victims: 21
  },
  {
    name: 'Victoria Tan',
    hair_color: 'black',
    eye_color: 'brown',
    dob: new Date(1996, 9, 2, 2, 20),
    love: ['dancing with the devil in the pale moonlight'],
    location: 'Brooklyn, New York, US',
    gender: 'f',
    title: 'the Duke of Edinburgh',
    victims: 420
  },
  {
    name: 'Jelly Bear',
    hair_color: 'light brown',
    eye_color: 'brown',
    dob: new Date(2016, 1, 30, 12, 30),
    loves: ['licking couches', 'eating sweet potato'],
    location: 'Brooklyn, New York, US',
    gender: 'f',
    title: 'Chubby bear',
    victims: 1
  }
]

let robertPattinson = {
  name: 'Robert Pattinson',
  hair_color: 'blond',
  eye_color: 'blue',
  dob: new Date(1986, 5, 13, 12, 12),
  loves: ['being a bat', 'making movies'],
  location: 'London, England, UK',
  gender: 'm',
  title: 'the Batman'
}
async function findDocs(){
  const find = await Vampire.find({gender:'f'})
  console.log(find)
}
// findDocs()

async function find500(){
  const findOver = await Vampire.find({victims: {$gte: 500}})
  console.log(findOver)
}
//find500()

// Vampire.insertMany(newVamps, function(error){
//   if (error) console.log(error)
//   console.log('Documents inserted into Vampire collection')
// })



// Vampire.insertMany(seedData)
// .then((data) =>  console.log(data))
// .catch((error)=> console.log(error))
// .finally(()=>db.close())