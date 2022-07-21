import axios from 'axios';
// import { url } from '../Url';


const Api = axios.create({ baseURL: 'https://api.tvmaze.com/search/shows?q=star%20wars' });
 //const Api = axios.create({ baseURL: 'http://localhost:8080/' });


// https://jsonplaceholder.typicode.com/photos
export default Api;