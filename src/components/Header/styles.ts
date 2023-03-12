import styled from 'styled-components'
import theme from 'styles/theme'

export const Container = styled.div`
  width: 100%;
  height: 4rem;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
`

export const Title = styled.h1`
  font-size: 2.5rem;
  color: ${theme.colors.primary.main};
`

export const Logo = styled.img`
  width: 7.75rem;
  height: 1.3125rem;
`
