import React from 'react';
import Navbar from '../Navbar/NavbarComponent';
import Footer from '../Footer/FooterComponent';
import './App.scss';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="greeting">
          <h1>MERRY-GO-ROUND</h1>
          <p>Always a pleasure finding new jobs</p>

          <img src={require('../../assets/yeoman.png')} />
        </div>
        <div className='content'>
          {this.props.children}
        </div>
        <Footer username={this.props.viewer.username} website={this.props.viewer.website} />
      </div>
    );
  }
}

