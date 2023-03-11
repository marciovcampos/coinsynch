import { render, screen } from 'utils/testUtils'
import Header from '.'

describe('<Header />', () => {
  it('should render the heading', () => {
    render(<Header />)

    expect(
      screen.getByRole('heading', { name: /CoinSynch/i })
    ).toBeInTheDocument()
  })
})
