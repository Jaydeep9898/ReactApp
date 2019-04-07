import React from 'react';
import axios from 'axios';
class Student  extends React.Component {
  state = {
    persons: '',
    facts: ''
  }

  async componentDidMount() {
    await axios.get(`https://dog.ceo/api/breeds/image/random`)
      .then(res => {
        const persons = res.data.message;
        this.setState({ persons });
      })
  }

  handleClick = () => {
    axios.get('https://some-random-api.ml/facts/dog')
    .then(res => {
      const facts = res.data.fact;
      this.setState({ facts });
      this.componentDidMount();
    })
    .catch(err => {
      console.log(err);
    })
  }


  render() {
    return (
        <div>
        <img src={this.state.persons} height='300' width='300' alt='Doggo cutto' style={{

            margin: '20px',
            border: '5px  blue',

            
        }}></img>
        <div style={{
          margin: '20px',
        }}>
        <button onClick={this.handleClick} style={{
          background: '#4CAF50',
          border: 'none',
          color: 'white',
          padding: '15px 32px',
          textAlign: 'center',
          textDecoration: 'none',
          display: 'inline-block',
          font: '16px',
          margin: '4px 2px',
          cursor: 'pointer',
        }}>Click Me</button>
          <p style={{
          color: 'white',
          fontSize: '30px'
        }}>{this.state.facts}</p>
        </div>
        </div>

    )

  }
}

//don't use default as while importing the component we can call it by other names. Where removing the default we 
export {Student};