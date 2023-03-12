import React from 'react'

import * as S from './styles'

type Props = {
  className?: string
  children: React.ReactNode
  variant?: 'text' | 'contained'
  onClick?: () => void
}

const Button: React.FC<Props> = ({
  className,
  children,
  variant = 'contained',
  onClick
}) => (
  <S.ButtonWrapper variant={variant} onClick={onClick} className={className}>
    {children}
  </S.ButtonWrapper>
)

export { Button }
