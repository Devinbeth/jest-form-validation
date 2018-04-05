const functions = require('./utils/functions.js');

describe('Age Tests', () => {
  test('pass 18', () => expect(functions.ageCheck(18)).toBeTruthy());
  test('pass 108', () => expect(functions.ageCheck(108)).toBeTruthy());
  test('fail 109', () => expect(functions.ageCheck(109)).toBeFalsy());
  test('fail 17', () => expect(functions.ageCheck(17)).toBeFalsy());
  test('pass 32', () => expect(functions.ageCheck(32)).toBeTruthy());
  test('fail string', () => expect(functions.ageCheck('test')).toBeFalsy());
});

describe('Password Tests', () => {
  test('fail email does not exist', () => expect(functions.emailCheck('')).toBeFalsy());
  test('pass with @', () => expect(functions.emailCheck('test@test.com')).toBeTruthy());
  test('fail without @', () => expect(functions.emailCheck('test.com')).toBeFalsy());
  test('pass with .', () => expect(functions.emailCheck('test@test.com')).toBeTruthy());
  test('fail without .', () => expect(functions.emailCheck('test@testcom')).toBeFalsy());
});

describe('Car Tests', () => {
  test('axios get', () => functions.getCars('https://joes-autos.herokuapp.com/api/vehicles').then(data => {
    expect(data.length).toBe(20);
  }));
})
