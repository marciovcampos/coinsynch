import React from 'react'

import * as S from './styles'

type Props = {
  className?: string
  title: string
}

const Benefit: React.FC<Props> = ({ className, title }) => (
  <S.BenefitWrapper className={className}>
    <S.Title>{title}</S.Title>
  </S.BenefitWrapper>
)

export { Benefit }
