/**
 * Created by sachg on 4/7/2016.
 */
import React from 'react';
import {Grid, Cell, Textfield, Button, Checkbox} from 'react-mdl';

export default class AppForm extends React.Component {
  render() {
    return (
      <div>
        <h3>APPLICATION FORM</h3>
        <hr />
        <div style={{width: '100%', margin: 'auto'}}>
          <form >
            <Grid>
              <Cell col={4} />
              <Cell col={4}><div style={{width: '100%'}}><Textfield label="position applied" /></div></Cell>
              <Cell col={4} />
            </Grid>

              <Grid>
                <Cell col={4}><Textfield label="First Name, Middle Name, Last Name,Address,Fax,Mobile No Tel,Email" /></Cell>
                <Cell col={4}><Textfield label="First Name, Middle Name, Last Name,Address,Fax,Mobile No Tel,Email" /></Cell>
                <Cell col={4}><Textfield label="First Name, Middle Name, Last Name,Address,Fax,Mobile No Tel,Email" /></Cell>
                </Grid>
              <Grid>
                <Cell col={4}><Textfield label="First Name, Middle Name, Last Name,Address,Fax,Mobile No Tel,Email" /></Cell>
                <Cell col={4}><Textfield label="First Name, Middle Name, Last Name,Address,Fax,Mobile No Tel,Email" /></Cell>
                <Cell col={4}><Textfield label="First Name, Middle Name, Last Name,Address,Fax,Mobile No Tel,Email" /></Cell>
                </Grid>
            <Grid >
            <Cell col={4}><Textfield label="First Name, Middle Name, Last Name,Address,Fax,Mobile No Tel,Email" /></Cell>
                <Cell col={4}><Textfield label="First Name, Middle Name, Last Name,Address,Fax,Mobile No Tel,Email" /></Cell>
                <Cell col={4}><Textfield label="First Name, Middle Name, Last Name,Address,Fax,Mobile No Tel,Email" /></Cell>
              </Grid>
            <Grid>
              <Cell col={4}><Textfield label="First Name, Middle Name, Last Name,Address,Fax,Mobile No Tel,Email" /></Cell>
              <Cell col={4}><Textfield label="First Name, Middle Name, Last Name,Address,Fax,Mobile No Tel,Email" /></Cell>
              <Cell col={4}><Textfield label="First Name, Middle Name, Last Name,Address,Fax,Mobile No Tel,Email" /></Cell>
            </Grid>
            <Grid>
              <Cell col={4}><Textfield label="First Name, Middle Name, Last Name,Address,Fax,Mobile No Tel,Email" /></Cell>
              <Cell col={4}><Textfield label="First Name, Middle Name, Last Name,Address,Fax,Mobile No Tel,Email" /></Cell>
              <Cell col={4}><Textfield label="First Name, Middle Name, Last Name,Address,Fax,Mobile No Tel,Email" /></Cell>
            </Grid><Grid>
            <Cell col={4}><Textfield label="First Name, Middle Name, Last Name,Address,Fax,Mobile No Tel,Email" /></Cell>
            <Cell col={4}><Textfield label="First Name, Middle Name, Last Name,Address,Fax,Mobile No Tel,Email" /></Cell>
            <Cell col={4}><Textfield label="First Name, Middle Name, Last Name,Address,Fax,Mobile No Tel,Email" /></Cell>
          </Grid><Grid>
            <Cell col={4}><Textfield label="First Name, Middle Name, Last Name,Address,Fax,Mobile No Tel,Email" /></Cell>
            <Cell col={4}><Textfield label="First Name, Middle Name, Last Name,Address,Fax,Mobile No Tel,Email" /></Cell>
            <Cell col={4}><Textfield label="First Name, Middle Name, Last Name,Address,Fax,Mobile No Tel,Email" /></Cell>
          </Grid><Grid>
            <Cell col={4}><Textfield label="First Name, Middle Name, Last Name,Address,Fax,Mobile No Tel,Email" /></Cell>
            <Cell col={4}><Textfield label="First Name, Middle Name, Last Name,Address,Fax,Mobile No Tel,Email" /></Cell>
            <Cell col={4}><Textfield label="First Name, Middle Name, Last Name,Address,Fax,Mobile No Tel,Email" /></Cell>
          </Grid>
            <hr />
            <Grid>
              <Cell col={4}><h4>LANGUAGE</h4></Cell>
              <Cell col={2}><h4>SPEAK</h4></Cell>
              <Cell col={2}><h4>UNDERSTAND</h4></Cell>
              <Cell col={2}><h4>READ</h4></Cell>
              <Cell col={2}><h4>WRITE</h4></Cell>
            </Grid>
            <Grid>
              <Cell col={4}><h4>Arabic</h4></Cell>
              <Cell col={2}><Checkbox /></Cell>
              <Cell col={2}><Checkbox /></Cell>
              <Cell col={2}><Checkbox /></Cell>
              <Cell col={2}><Checkbox /></Cell>
            </Grid>
            <Grid>
              <Cell col={4}><h4>English</h4></Cell>
              <Cell col={2}><Checkbox /></Cell>
              <Cell col={2}><Checkbox /></Cell>
              <Cell col={2}><Checkbox /></Cell>
              <Cell col={2}><Checkbox /></Cell>
            </Grid>
            <Grid>
              <Cell col={4}><h4>Hindi</h4></Cell>
              <Cell col={2}><Checkbox /></Cell>
              <Cell col={2}><Checkbox /></Cell>
              <Cell col={2}><Checkbox /></Cell>
              <Cell col={2}><Checkbox /></Cell>
            </Grid>
            <Grid>
              <Cell  col={4} />
              <Cell  col={4} />
              <Cell  col={4} />
            </Grid>
            <Grid>
              <Cell col={4} ><Textfield label="Applied For Country*, Qualification* Work Experience Ind Driving lic NO*" /></Cell>
              <Cell col={4} ><Textfield label="Applied For Country*, Qualification* Work Experience Ind Driving lic NO*" /></Cell>
              <Cell col={4} ><Textfield label="Applied For Country*, Qualification* Work Experience Ind Driving lic NO*" /></Cell>
            </Grid>
            <Grid>
              <Cell col={4} ><Textfield label="Applied For Country*, Qualification* Work Experience Ind Driving lic NO*" /></Cell>
              <Cell col={4} ><Textfield label="Applied For Country*, Qualification* Work Experience Ind Driving lic NO*" /></Cell>
              <Cell col={4} ><Textfield label="Applied For Country*, Qualification* Work Experience Ind Driving lic NO*" /></Cell>
            </Grid>
            <Grid>
              <Cell col={4} ><Textfield label="Applied For Country*, Qualification* Work Experience Ind Driving lic NO*" /></Cell>
              <Cell col={4} ><Textfield label="Applied For Country*, Qualification* Work Experience Ind Driving lic NO*" /></Cell>
              <Cell col={4} ><Textfield label="Applied For Country*, Qualification* Work Experience Ind Driving lic NO*" /></Cell>
            </Grid>
            <Grid>
              <Cell col={4} ><Textfield label="Applied For Country*, Qualification* Work Experience Ind Driving lic NO*" /></Cell>
              <Cell col={4} ><Textfield label="Applied For Country*, Qualification* Work Experience Ind Driving lic NO*" /></Cell>
              <Cell col={4} ><Textfield label="Applied For Country*, Qualification* Work Experience Ind Driving lic NO*" /></Cell>
            </Grid>
            <hr />
            <Grid>
              <Cell col={4}><h4>EMPLOYER</h4></Cell>
              <Cell col={4}><h4>DURATION</h4></Cell>
              <Cell col={4}><h4>DESIGNATION</h4></Cell>
            </Grid>
            <Grid>
              <Cell col={4}><Textfield label="employer,duration,designation" /></Cell>
              <Cell col={4}><Textfield label="employer,duration,designation" /></Cell>
              <Cell col={4}><Textfield label="employer,duration,designation" /></Cell>
            </Grid>
            <Grid>
              <Cell col={4}><Textfield label="employer,duration,designation" /></Cell>
              <Cell col={4}><Textfield label="employer,duration,designation" /></Cell>
              <Cell col={4}><Textfield label="employer,duration,designation" /></Cell>
            </Grid>
            <Grid>
              <Cell col={4}><Textfield label="employer,duration,designation" /></Cell>
              <Cell col={4}><Textfield label="employer,duration,designation" /></Cell>
              <Cell col={4}><Textfield label="employer,duration,designation" /></Cell>
            </Grid>
            <Grid>
              <Cell col={4}><h4>&nmsp</h4></Cell>
              <Cell col={4}><h4>&nmsp</h4></Cell>
              <Cell col={4}><h4>&nmsp</h4></Cell>
            </Grid>
            <Grid>
              <Cell col={4}><Textfield label="overseas Experience" /></Cell>
              <Cell col={4}><Textfield label="overseas Experience" /></Cell>
              <Cell col={4}><Textfield label="overseas Experience" /></Cell>
            </Grid>
            <hr />
            <Grid>
              <Cell col={3}><h4>EMPLOYER</h4></Cell>
              <Cell col={3}><h4>DURATION</h4></Cell>
              <Cell col={3}><h4>COUNTRY</h4></Cell>
              <Cell col={3}><h4>DESIGNATION</h4></Cell>
            </Grid>
            <Grid>
              <Cell col={3}><Textfield label="employer,duration,country,designation" /></Cell>
              <Cell col={3}><Textfield label="employer,duration,country,designation" /></Cell>
              <Cell col={3}><Textfield label="employer,duration,country,designation" /></Cell>
              <Cell col={3}><Textfield label="employer,duration,country,designation" /></Cell>
            </Grid>
            <Grid>
              <Cell col={3}><Textfield label="employer,duration,country,designation" /></Cell>
              <Cell col={3}><Textfield label="employer,duration,country,designation" /></Cell>
              <Cell col={3}><Textfield label="employer,duration,country,designation" /></Cell>
              <Cell col={3}><Textfield label="employer,duration,country,designation" /></Cell>
            </Grid>
            <Grid>
              <Cell col={3}><Textfield label="employer,duration,country,designation" /></Cell>
              <Cell col={3}><Textfield label="employer,duration,country,designation" /></Cell>
              <Cell col={3}><Textfield label="employer,duration,country,designation" /></Cell>
              <Cell col={3}><Textfield label="employer,duration,country,designation" /></Cell>
            </Grid>
            <hr />
            <div>
              <h5>Minimum Expected Salary*</h5>
              <Textfield label="in Ksh" />
              <h5>Any Remarks</h5>
              <Textfield label="remarks" />
            </div>
            <Button raised>Submit</Button>
          </form>
        </div>
      </div>
    );
  }
}
