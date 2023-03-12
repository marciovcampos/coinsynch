import Grid from '@mui/material/Grid'
import Container from 'components/Container'
import * as S from './styles'

import LogoCoinSynch from 'assets/coin-synch.svg'

function Footer() {
  return (
    <S.Wrapper>
      <Container>
        <Grid container>
          <Grid item xs={6}>
            <S.Text> Copyright @ 2023 - All rights reserved</S.Text>
          </Grid>
          <Grid item xs={6}>
            <S.Logo src={LogoCoinSynch.src} alt="CoinSynch Logo"></S.Logo>
          </Grid>
        </Grid>
      </Container>
    </S.Wrapper>
  )
}

export default Footer
