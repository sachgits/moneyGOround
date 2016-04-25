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

          <h1>Where Money Goes Round</h1>
          <p>Your Turn is Comming</p>
          <img src={require('../../assets/yeoman.png')} />
        </div>
        <div className='content'>
          {this.props.children}
        </div>
        <Footer username={"sachgits"} website={"Merry Go Round"} />
      </div>
    );
  }
}

