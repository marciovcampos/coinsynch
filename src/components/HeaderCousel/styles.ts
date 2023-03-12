import styled from 'styled-components'
import theme from 'styles/theme'

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 6.25rem;
`

export const Image = styled.img`
  width: 24rem;
  display: flex;
  justify-content: center;
`

export const Title = styled.h1`
  color: ${theme.colors.primary.main};
  font-size: ${theme.font.sizes.bold.h1};
  max-width: 36.875rem;
  margin-bottom: 1.5rem;
`

export const Text = styled.h5`
  color: ${theme.colors.textBase};
  font-size: ${theme.font.sizes.regular.h5};
  font-weight: 400;
  max-width: 36.875rem;
  margin-bottom: 2rem;
`
