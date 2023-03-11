import styled from 'styled-components'
import theme from 'styles/theme'

export const Container = styled.div`
  width: 100%;
  height: 4rem;
  padding: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Title = styled.h1`
  font-size: 2.5rem;
  color: ${theme.colors.primary.main};
`
