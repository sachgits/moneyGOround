/* eslint-disable global-require */
import React from 'react';
import { Grid, Cell, Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';
<<<<<<< Updated upstream
import AppForm from '../AppForm/AppForm';
=======
import AppForm from '../AppForm/AppFormComponent';
>>>>>>> Stashed changes

export default class Feature extends React.Component {
  static propTypes = {
    viewer: React.PropTypes.object.isRequired
  };

  render() {
    return (
      <div>
        <h2>Integrated with</h2>
        <hr />
<<<<<<< Updated upstream
        <Grid className='tools'>
<<<<<<< HEAD
          <AppForm />
=======
        <Grid className='tools' >
          <h1>Content Should come here</h1>
>>>>>>> Stashed changes
=======
          {this.props.viewer.features.edges.map(edge => {
            const imageUrl = require(`../../assets/${edge.node.name.toLowerCase()}.png`);
            return (
              <Cell col={4} key={edge.node.id}>
                <Card style={{ width: '250px', margin: 'auto' }}>
                  <CardTitle expand style={{ color: '#ccc', background: `url(${imageUrl}) center no-repeat`, backgroundSize: '40%' }} />
                  <CardActions style={{ textAlign: 'center', padding: 0 }}>
                    <Button colored href={edge.node.url}>{edge.node.name}</Button>
                  </CardActions>
                  <CardText style={{ textAlign: 'center', paddingTop: 0, paddingBottom: '30px' }}>
                    {edge.node.description}
                  </CardText>
                </Card>
              </Cell>
            );
          })}
>>>>>>> 9b10026eef63ca7f4c1a82c11afa196de2632082
        </Grid>
      </div>
    );
  }
}
