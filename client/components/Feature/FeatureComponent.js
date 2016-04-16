import React from 'react';
import { Grid, Cell, Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';
<<<<<<< Updated upstream
import AppForm from '../AppForm/AppForm';
=======
import AppForm from '../AppForm/AppFormComponent';
>>>>>>> Stashed changes

export default class Feature extends React.Component {
  render() {
    return (
      <div>
        <h2>Integrated with</h2>
        <hr />
<<<<<<< Updated upstream
        <Grid className='tools'>
          <AppForm />
=======
        <Grid className='tools' >
          <h1>Content Should come here</h1>
>>>>>>> Stashed changes
        </Grid>
      </div>
    );
  }
}
