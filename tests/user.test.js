import { getFirstName } from '../src/utils/user'

test('Should return first name when given full name', () => {
  const firstName = getFirstName('Travis Wicklund')

  expect(firstName).toBe('Travis')
})
