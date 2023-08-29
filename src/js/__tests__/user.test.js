// import getLevel from '../userInfo';
import fetchData from '../http';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('getLevel should return 200', () => {
  fetchData.mockReturnValue({ status: 200, level: 47 });
});
