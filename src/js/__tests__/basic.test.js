import sum from '../basic';

import getHealthStatus from '../app';

test('should sum', () => {
  const result = sum([1, 2, 3]);

  expect(result).toBe(6);
});

test('health status is healthy when health > 50', () => {
  const character = { name: 'Mage', health: 90 };
  expect(getHealthStatus(character)).toBe('healthy');
});

test('health status is wounded when health between 50 and 15', () => {
  const character = { name: 'Warrior', health: 30 };
  expect(getHealthStatus(character)).toBe('wounded');
});

test('health status is critical when health < 15', () => {
  const character = { name: 'Rogue', health: 10 };
  expect(getHealthStatus(character)).toBe('critical');
});

// import http from '../http';

// мокаем модуль http
// jest.mock('../http', () => {
//   const originalHttp = jest.requireActual('../http');
//   return {
//     ...originalHttp,
//     httpGet: jest.fn(),
//     httpPost: jest.fn(),
//   };
// });

// test('httpGet бросает ошибку', () => {
//   expect(() => {
//     http.httpGet('some-url');
//   }).rejects.toThrowError();
// });

// test('httpPost бросает ошибку', () => {
//   expect(() => {
//     http.httpPost('some-url');
//   }).rejects.toThrowError();
// });
