import Helper from '../helpers/Helper';

describe('it is Russian word', () => {
  test('should be truth', () => {
    expect(Helper.isRussianWord('бизнес')).toBeTruthy();
  });
  test('should be false', () => {
    expect(Helper.isRussianWord('guide')).toBeFalsy();
  });
});

describe('the fetch of movieURL', () => {
  test('the year is 1968', () => Helper.fetchPost('https://www.omdbapi.com/?i=tt0063534&apikey=e504ed78').then((data) => {
    expect(data.Year).toBe('1968');
  }));
});
