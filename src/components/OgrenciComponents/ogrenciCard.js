import React from 'react'
import { Card, Image ,Grid} from 'semantic-ui-react'

const OgrenciCard = ({ogrenci}) => (
 <Grid.Column>
 <Card>
    <Image src='https://st3.depositphotos.com/16136362/18446/v/450/depositphotos_184469786-stock-illustration-student-logo-design-education-logo.jpg%20?%3E' wrapped ui={false} />
    <Card.Content>
      <Card.Header>{ogrenci.AD} </Card.Header>
      </Card.Content>
  </Card>
 </Grid.Column>

)

export default OgrenciCard