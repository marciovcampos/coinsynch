import styled from 'styled-components'
import theme from 'styles/theme'

export const BenefitWrapper = styled.div`
  cursor: pointer;
  width: 17.5rem;
  height: 16.75rem;
  border-radius: 0.375rem;
  padding: 1.5rem;
  background-color: ${theme.colors.white};
  box-shadow: 0px 12px 24px 0px #0000000d;

  & + & {
    margin-left: 1.5rem;
  }
`

export const Title = styled.h4`
  color: ${theme.colors.textBase};
  font-size: ${theme.font.sizes.bold.h4};
  line-height: 2rem;
  margin-bottom: 0.5rem;
`
