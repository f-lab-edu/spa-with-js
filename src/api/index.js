import axios from 'axios';
import apiConfig from './config';

const Index = axios.create(apiConfig);

export default Index;
