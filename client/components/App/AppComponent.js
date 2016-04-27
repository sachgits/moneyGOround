import React from 'react';
import Navbar from '../Navbar/NavbarComponent';
import Footer from '../Footer/FooterContainer';
import './App.scss';
import yeoman from '../../assets/yeoman.png';

export default class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.object.isRequired,
    viewer: React.PropTypes.object.isRequired
  };

  render() {
    return (
      <div className='app'>
        <Navbar />
<<<<<<< HEAD
        <div className="greeting">

          <h1>Where Money Goes Round</h1>
          <p>Your Turn is Comming</p>
          <img src={require('../../assets/yeoman.png')} />
=======
        <div className='greeting'>
          <h1>Sawasdee, Sawasdee!</h1>
          <p>Always a pleasure scaffolding your apps</p>
          <img src={yeoman} alt='yeoman' />
>>>>>>> 9b10026eef63ca7f4c1a82c11afa196de2632082
        </div>
        <div className='content'>
          {this.props.children}
        </div>
<<<<<<< HEAD
        <Footer username={"sachgits"} website={"Merry Go Round"} />
=======
        <Footer viewer={this.props.viewer} />
>>>>>>> 9b10026eef63ca7f4c1a82c11afa196de2632082
      </div>
    );
  }
}

