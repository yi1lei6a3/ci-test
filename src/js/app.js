function getHealthStatus(character) {
    if (character.health > 50) {
      return 'healthy';
    } else if (character.health >= 15) {
      return 'wounded';
    } else {
      return 'critical';
    }
  }
  
  export default getHealthStatus;

import sum from './basic';

// console.log('worked');

// console.log(sum([1, 2]));

