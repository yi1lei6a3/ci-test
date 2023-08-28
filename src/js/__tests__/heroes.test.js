import sortHeroesByHealth from '../heroes';

test('sort heroes by health in descending order', () => {
  const heroes = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  const sortedHeroes = sortHeroesByHealth(heroes);

  const expectedSortedHeroes = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  expect(sortedHeroes).toEqual(expectedSortedHeroes);
});