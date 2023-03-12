import Container from 'components/Container'
import LogoCoinSynch from 'assets/coinSynch.svg'

import * as S from './styles'

function Header() {
  return (
    <S.Wrapper>
      <Container>
        <S.Logo src={LogoCoinSynch.src} alt="CoinSynch Logo"></S.Logo>
        <S.LinkComponent href="#about">About Us</S.LinkComponent>
        <S.LinkComponent href="#about">Top Cryptos</S.LinkComponent>
      </Container>
    </S.Wrapper>
  )
}

export default Header
