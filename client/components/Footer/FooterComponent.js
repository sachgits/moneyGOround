import React from 'react';
import { Footer as MDLFooter, FooterSection } from 'react-mdl';
import './Footer.scss';

export default class Footer extends React.Component {
  static propTypes = {
    viewer: React.PropTypes.object.isRequired,
  };

  render() {
    return (
<<<<<<< HEAD
      <MDLFooter size="mini">
        <FooterSection type="middle">
          <span>Goodluck as you search for your next job <a  href="#"></a></span>
=======
      <MDLFooter size='mini'>
        <FooterSection type='middle'>
          <span>Handcrafted with ♥ by <a href={this.props.viewer.website}> @{this.props.viewer.username}</a></span>
>>>>>>> 9b10026eef63ca7f4c1a82c11afa196de2632082
        </FooterSection>
      </MDLFooter>
    );
  }
}
