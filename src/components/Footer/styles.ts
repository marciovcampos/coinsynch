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
`
export const Text = styled.h1`
  font-size: 0.75rem;
  color: ${theme.colors.textBase};
`

export const Logo = styled.img`
  width: 5.875rem;
  height: 1rem;
`
