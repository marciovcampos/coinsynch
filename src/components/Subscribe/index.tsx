import Grid from '@mui/material/Grid'
import Container from 'components/Container'

import * as S from './styles'

function Subscribe() {
  return (
    <>
      <S.Wrapper>
        <Container>
          <Grid container>
            <Grid item xs={6}>
              <S.Subtitle>Lorem ipsum dolor sit amet, consectetur</S.Subtitle>
              <S.Title>Lorem ipsum dolor sit amet, consectetur</S.Title>
              <S.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna, porttitor
              </S.Text>
            </Grid>
            <Grid item xs={6}>
              <S.Form action="/" method="post">
                <S.Text>Email</S.Text>
                <S.Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                />
                <S.Button variant="contained" type="submit">
                  Sign up
                </S.Button>
              </S.Form>
            </Grid>
          </Grid>
        </Container>
      </S.Wrapper>
    </>
  )
}

export default Subscribe
