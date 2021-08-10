import React from 'react'
import { Card, Grid, Button, Icon } from 'semantic-ui-react'
import { Link } from "react-router-dom"
const extra = (ogrenci, ogrenciSil) => {
  return (
    <div className="ui two buttons">
      <Button animated as={Link} to={`ogrenci/${ogrenci.ID_OGRENCI}`} >
        <Button.Content visible>Düzenle</Button.Content>
        <Button.Content hidden>
          <Icon name='edit' />
        </Button.Content>
      </Button>
      <Button animated='vertical' onClick= {() => ogrenciSil(ogrenci.ID_OGRENCI)}>
        <Button.Content hidden>Sil </Button.Content>
        <Button.Content visible>
          <Icon name='trash' />
        </Button.Content>
      </Button>
    </div>
  )
}
const OgrenciCard = ({ ogrenci, ogrenciSil }) => (
  <Grid.Column>
    <Card>
      <Card
        image={"https://st3.depositphotos.com/16136362/18446/v/450/depositphotos_184469786-stock-illustration-student-logo-design-education-logo.jpg%20?%3E"}
        header={ogrenci.AD + ' ' + ogrenci.SOYAD}
        extra={ extra(ogrenci, ogrenciSil) }
      />
    </Card>
  </Grid.Column>

)

export default OgrenciCard