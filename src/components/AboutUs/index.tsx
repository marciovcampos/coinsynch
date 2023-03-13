import { Benefit } from 'components/Benefit'
import Container from 'components/Container'

import * as S from './styles'

function AboutUs() {
  return (
    <S.Wrapper>
      <Container>
        <S.AboutUsContainer>
          <S.BenefitsContainer>
            <Benefit title="Cypto Solutions"></Benefit>
            <Benefit title="Cypto Solutions"></Benefit>
            <Benefit title="Cypto Solutions"></Benefit>
            <Benefit title="Cypto Solutions"></Benefit>
          </S.BenefitsContainer>

          <S.DescriptionContainer>
            <S.Subtitle>Lorem ipsum</S.Subtitle>
            <S.Title>Lorem ipsum</S.Title>
            <S.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor
            </S.Text>
            <S.Button variant="contained">Sign up now</S.Button>
          </S.DescriptionContainer>
        </S.AboutUsContainer>
      </Container>
    </S.Wrapper>
  )
}

export default AboutUs
