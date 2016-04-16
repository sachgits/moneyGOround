import React from 'react';
import {Footer as MDLFooter, FooterSection} from 'react-mdl';
import './Footer.scss';

export default class Footer extends React.Component {
  render() {
    return (
      <MDLFooter size="mini">
        <FooterSection type="middle">
          <span>Goodluck as you search for your next job <a  href="#"></a></span>
        </FooterSection>
      </MDLFooter>
    );
  }
}
