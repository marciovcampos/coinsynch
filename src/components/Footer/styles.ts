import styled from 'styled-components'
import theme from 'styles/theme'

export const Container = styled.div`
  width: 100%;
  height: 4rem;
  background-color: ${theme.colors.white};
  box-shadow: 0px -4px 8px rgba(77, 77, 77, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`
export const Text = styled.text`
  font-size: ${theme.font.sizes.regular.label};
  color: ${theme.colors.textBase};
`

export const Logo = styled.img`
  width: 5.875rem;
  height: 1rem;
`
