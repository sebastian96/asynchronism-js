const fetchData = require('../index.js');
const API = 'https://rickandmortyapi.com/api/character/';

const getData = async () => {
    try {
        const count = await fetchData(API);
        const person = await fetchData(`${API}${count.results[0].id}`);
        const dimension = await fetchData(person.origin.url);
    
        console.log(count.info.count);
        console.log(person.name);
        console.log(dimension.dimension);
    } catch {
        console.error(error);
    }
}

getData();