import { Container, Logo, Text } from './styles'
import Grid from '@mui/material/Grid'

import LogoCoinSynch from 'assets/coinSynch.svg'

function Footer() {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Text> Copyright @ 2023 - All rights reserved</Text>
        </Grid>
        <Grid item xs={6}>
          <Logo src={LogoCoinSynch.src} alt="CoinSynch Logo"></Logo>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Footer
