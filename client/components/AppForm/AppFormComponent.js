import React from 'react';
import {Grid,Cell,Textfield,Checkbox} from 'react-mdl';
import './AppForm.scss';

export default class AppForm extends React.Component {
  render() {
    return (
      <div>
        <h2>Application Form</h2>
        <div>Position Applied</div>
        <input type="text"  />
      <Grid >

        <Cell col={4} ><Textfield label="First Name" /></Cell>
        <Cell col={4} ><Textfield label="Middle Name" /></Cell>
        <Cell col={4} ><Textfield label="Last Name" /></Cell>
      </Grid>

        <Grid><
          Cell col={4}>
          <Textfield label="" />


        </Cell>
          <Cell col={4}>
          <Textfield label="" />

        </Cell>

          <Cell col={4}>
          <Textfield label="" />

        </Cell>
        </Grid>
        <Grid><
          Cell col={4}>
          <Textfield label="" />


        </Cell>
          <Cell col={4}>
          <Textfield label="" />

        </Cell>

          <Cell col={4}>
          <Textfield label="" />

        </Cell>
        </Grid>
        <Grid><
          Cell col={4}>
          <Textfield label="" />


        </Cell>
          <Cell col={4}>
          <Textfield label="" />

        </Cell>

          <Cell col={4}>
          <Textfield label="" />

        </Cell>
        </Grid>
        <Grid><
          Cell col={4}>
          <Textfield label="" />


        </Cell>
          <Cell col={4}>
          <Textfield label="" />

        </Cell>

          <Cell col={4}>
          <Textfield label="" />

        </Cell>
        </Grid>
        <Grid><
          Cell col={4}>
          <Textfield label="" />


        </Cell>
          <Cell col={4}>
          <Textfield label="" />

        </Cell>

          <Cell col={4}>
          <Textfield label="" />

        </Cell>
        </Grid>
        <Grid><
          Cell col={4}>
          <Textfield label="" />


        </Cell>
          <Cell col={4}>
          <Textfield label="" />

        </Cell>

          <Cell col={4}>
          <Textfield label="" />

        </Cell>
        </Grid>
        <Grid><
          Cell col={4}>
          <Textfield label="" />


        </Cell>
          <Cell col={4}>
          <Textfield label="" />

        </Cell>
          <Cell col={4}>
          <Textfield label="" />

        </Cell></Grid>
       <div >
          <h3>Languages</h3>
        </div>
        <Grid>
          <Cell col={1}><h4>LANGUAGE</h4></Cell>
          <Cell col={1}><h4>SPEAK</h4></Cell>
          <Cell col={1}><h4>UNDERSTAND</h4></Cell>
          <Cell col={1}><h4>READ</h4></Cell>
          <Cell col={1}><h4>WRITE</h4></Cell>
        </Grid>
        <Grid>
          <Cell col={1}><p>English</p></Cell>
          <Cell col={1}><Checkbox label="Without ripple" /></Cell>
          <Cell col={1}><Checkbox label="Without ripple" /></Cell>
          <Cell col={1}><Checkbox label="Without ripple" /></Cell>
          <Cell col={1}><Checkbox label="Without ripple" /></Cell>
        </Grid>
        <Grid>
          <Cell col={1}><p>Hindi</p></Cell>
          <Cell col={1}><Checkbox label="Without ripple" /></Cell>
          <Cell col={1}><Checkbox label="Without ripple" /></Cell>
          <Cell col={1}><Checkbox label="Without ripple" /></Cell>
          <Cell col={1}><Checkbox label="Without ripple" /></Cell>
        </Grid>
        <Grid>
          <Cell col={1}><p>Arabic</p></Cell>
          <Cell col={1}><Checkbox label="Without ripple" /></Cell>
          <Cell col={1}><Checkbox label="Without ripple" /></Cell>
          <Cell col={1}><Checkbox label="Without ripple" /></Cell>
          <Cell col={1}><Checkbox label="Without ripple" /></Cell>
        </Grid>
      </div>
    );
  }
}
