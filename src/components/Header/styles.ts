import styled from 'styled-components'
import theme from 'styles/theme'
import Link from 'next/link'

export const Wrapper = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LinkComponent = styled(Link)`
  margin-left: 2.5rem;
  text-decoration: none;
  font-size: ${theme.font.sizes.regular.label};
  color: ${theme.colors.textBase};
  text-align: center;
`

export const Logo = styled.img`
  width: 7.75rem;
  height: 1.3125rem;
  margin-right: 2.5rem;
`
