const fetch = require('node-fetch')

let url = 'https://randomuser.me/api/?results=20'

const peopleList = [];

const people = () => {
    return fetch (url)
    .then(res => res.json())
    .then(({results})=>{ return results.forEach((obj)=> {
        peopleList.push([obj.picture.large, obj.name.first, obj.name.last]);
    })})
    .catch(err => console.log('The user is not found', err))
};
people();

module.exports = peopleList


// const fetch = require('node-fetch');
// const newArr = [];
// const userList = ()=>{
//     return fetch('https://randomuser.me/api/?results=20')
//     .then(res=>res.json())
//     .then(({results})=>{ return results.forEach((obj)=> {
//         newArr.push([obj.picture.large, obj.name.first, obj.name.last]);
//     })})
//     .catch(err=>console.log('the user is not found'))
// }

// userList()

// module.exports = newArr;