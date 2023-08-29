import './css/style.css';

// TODO: write your code in app.js
import getHealthStatus from './js/app';

const character = { name: 'Magician', health: 35 };
const healthStatus = getHealthStatus(character);
// eslint-disable-next-line no-console
console.log(`Character health status: ${healthStatus}`);
