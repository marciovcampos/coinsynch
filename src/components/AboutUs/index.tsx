import Grid from '@mui/material/Grid'
import { Benefit } from 'components/Benefit'
import Container from 'components/Container'

import * as S from './styles'

function AboutUs() {
  return (
    <S.Wrapper>
      <Container>
        <Grid container>
          <Grid item xs={6}>
            <Benefit title="Cypto Solutions"></Benefit>
            <Benefit title="Cypto Solutions"></Benefit>
            <Benefit title="Cypto Solutions"></Benefit>
            <Benefit title="Cypto Solutions"></Benefit>
          </Grid>

          <Grid item xs={6}>
            <S.Subtitle>Lorem ipsum</S.Subtitle>
            <S.Title>Lorem ipsum</S.Title>
            <S.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor
            </S.Text>
            <S.Button variant="contained">Sign up now</S.Button>
          </Grid>
        </Grid>
      </Container>
    </S.Wrapper>
  )
}

export default AboutUs
