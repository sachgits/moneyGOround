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
<<<<<<< Updated upstream
          <h1>MERRY-GO-ROUND</h1>
          <p>Always a pleasure finding new jobs</p>

=======
          <h1>Where Money Goes Round</h1>
          <p>Your Turn is Comming</p>
>>>>>>> Stashed changes
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

