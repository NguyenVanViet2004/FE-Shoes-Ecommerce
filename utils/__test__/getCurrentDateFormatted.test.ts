import getCurrentDateFormatted from '~/utils/getCurrentDateFormatted'
describe('getCurrentDateFormatted function', () => {
  it('returns the current date in dd/mm/yyyy format', () => {
    const mockDate = new Date('2024-07-03T12:00:00Z')
    const originalDate = global.Date

    global.Date = jest.fn(() => mockDate) as any

    expect(getCurrentDateFormatted()).toBe('03/07/2024')

    global.Date = originalDate
  })
})
