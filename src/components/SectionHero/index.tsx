import React from 'react'

import Logo from 'components/Logo'
import Button from 'components/Button'
import * as S from './styles'

import { gaEvent } from 'utils/ga'
import Container from 'components/Container'
import { headerProps, LogoProps } from 'types/api'
import { getImageUrl } from '../../utils/getImageUrl'
type Props = {
  logo: LogoProps
  header: headerProps
}

const onClick = () =>
  gaEvent({ action: 'click', category: 'cta', label: 'hero button' })

const SectionHero = ({ logo, header }: Props) => {
  return (
    <S.Wrapper>
      <Container>
        <Logo {...logo} />

        <S.Content>
          <S.TextBlock>
            <S.Title>{header.title}</S.Title>
            <S.Description>{header.description}</S.Description>
            <S.ButtonWrapper>
              <Button
                href={getImageUrl(header.button.url)}
                onClick={onClick}
                wide
              >
                {header.button.label}
              </Button>
            </S.ButtonWrapper>
          </S.TextBlock>

          <S.Image
            src={getImageUrl(header.image.url)}
            alt={header.image.alternativeText}
          />
        </S.Content>
      </Container>
    </S.Wrapper>
  )
}

export default SectionHero
