import React from 'react'

import * as S from './styles'

type Props = {
  children: React.ReactNode
  variant?: 'text' | 'contained'
  onClick?: () => void
}

const Button: React.FC<Props> = ({
  children,
  variant = 'contained',
  onClick
}) => (
  <S.ButtonWrapper variant={variant} onClick={onClick}>
    {children}
  </S.ButtonWrapper>
)

export default Button
