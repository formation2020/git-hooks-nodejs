const sum = require('../src/sum')
it('should return correct sum', () => {
  const result = sum(3,6)
  expect(result).toBe(9)  
})