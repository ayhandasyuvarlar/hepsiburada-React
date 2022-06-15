import React, { Component } from 'react'
import HeadLink from './HeadLink'
import HeadLogo from './HeadLogo'
import Line from './Line'

export class HeadComponents extends Component {
  constructor(props) {
    super(props)

    this.state = {
      url: 'http://localhost:8080/UserContact',
      data: [],
    }
  }
  dataurl(url) {
    fetch(this.state.url)
      .then((response) => {
        return response.json()
      })
      .then((result) => {
        this.setState({ data: result })
      })
      .catch((err) => console.log(err))
  }
  componentDidMount() {
    this.dataurl()
  }
  render() {
    return( 
    <header>
      <HeadLink data={this.state.data}></HeadLink>
      <HeadLogo></HeadLogo>
      <Line></Line>
    </header>

     )
    
  }
}

export default HeadComponents
