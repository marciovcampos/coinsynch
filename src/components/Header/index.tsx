import { Container, Logo, Title } from './styles'
import LogoCoinSynch from 'assets/coinSynch.svg'

function Header() {
  return (
    <Container>
      <Logo src={LogoCoinSynch.src} alt="CoinSynch Logo"></Logo>
      <Title>CoinSynch</Title>
    </Container>
  )
}

export default Header
