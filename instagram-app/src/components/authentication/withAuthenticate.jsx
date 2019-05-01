import React from 'react';


const withAuthenticate = FirstComponent => SecondComponent =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        loggedIn: false
      }
    }
    componentDidMount() {
      if (localStorage.getItem('username')) {
        this.setState({ loggedIn: true })
      }
    }

    render() {
      if (this.state.loggedIn) {
        return <FirstComponent />;
      } else {
        return <SecondComponent />
      }
      
    }
  }

export default withAuthenticate;