import { Benefit } from 'components/Benefit'
import Container from 'components/Container'

import * as S from './styles'

function AboutUs() {
  return (
    <S.Wrapper>
      <Container>
        <S.AboutUsContainer>
          <S.BenefitsContainer>
            <S.BenefitsLine1>
              <Benefit title="Cypto Solutions" subtitle="For your company">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam,{' '}
              </Benefit>
              <Benefit title="Cypto Solutions" subtitle="For your company">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam,{' '}
              </Benefit>
            </S.BenefitsLine1>

            <S.BenefitsLine2>
              <Benefit title="Cypto Solutions" subtitle="For your company">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam,{' '}
              </Benefit>
              <Benefit title="Cypto Solutions" subtitle="For your company">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam,{' '}
              </Benefit>
            </S.BenefitsLine2>
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
