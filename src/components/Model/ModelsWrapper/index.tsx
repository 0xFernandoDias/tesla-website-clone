//each whole screen with a car photo, title and buttons
import React from 'react';

import { Container } from './styles'

const ModelsWrapper: React.FC = ({children})  => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default ModelsWrapper
