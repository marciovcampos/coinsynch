import Grid from '@mui/material/Grid'
import Container from 'components/Container'
import Button from 'components/Button'
import HappyWoman from 'assets/happyWoman.svg'

import * as S from './styles'

function HeaderCousel() {
  return (
    <Container>
      <S.Wrapper>
        <Grid container>
          <Grid item xs={6}>
            <S.Title>Lorem ipsum dolor sit amet, consectetur</S.Title>
            <S.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor
            </S.Text>
            <Button variant="contained">SIGN UP NOW </Button>
          </Grid>
          <Grid item xs={6}>
            <S.Image src={HappyWoman.src} alt="Happy Woman"></S.Image>
          </Grid>
        </Grid>
      </S.Wrapper>
    </Container>
  )
}

export default HeaderCousel
