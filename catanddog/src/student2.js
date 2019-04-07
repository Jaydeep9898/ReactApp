import React from 'react';
import axios from 'axios';
class Student2  extends React.Component {
  state = {
    persons: '',
    facts: '',
  }

  handleClick = () => {
    axios.get('https://catfact.ninja/fact?max_length=100')
    .then(res => {
      const facts = res.data.fact;
      this.setState({ facts });
      this.componentDidMount(500);
    })
    .catch(err => {
      console.log(err);
    })
  }

  

  async componentDidMount(code = 200) {
    await axios.get(`https://aws.random.cat/meow`)
      .then(res => {
        const persons = res.data.file;
        this.setState({ persons });
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
export {Student2};