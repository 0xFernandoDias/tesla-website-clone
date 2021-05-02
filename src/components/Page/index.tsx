import  React from 'react'
import DefaultOverlayContent from '../DefaultOverlayContent'
import { ModelsWrapper, ModelSection } from '../Model'

import { Container } from './styles'

const Page: React.FC = () => {
  return (
    <Container>

      <ModelsWrapper> {/*each whole screen with a car photo, title and buttons*/}
        <div>
          {[
            'Model One',
            'Model Two',
            'Model Three',
            'Model Four',
            'Model Five',
            'Model Six',
            'Model Seven'
          ].map(modelName=> (
            <ModelSection /*each car model*/
              key={modelName}
              className="colored"
              modelName={modelName}
              overlayNode={
              <DefaultOverlayContent /*title and buttons*/
                label={modelName}
                description="Order Online for Delivery" />
            }
          />
          ))}
        </div>
      </ModelsWrapper>

    </Container>
  )
}

export default Page