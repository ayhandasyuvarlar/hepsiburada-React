import React, { Component } from 'react'
import { FiMapPin } from 'react-icons/fi'
import { FaShoppingCart} from 'react-icons/fa'
export class UserComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      UserName: 'Ayhan Daşyuvarlar',
      img: 'https://avatars.githubusercontent.com/u/81258778?v=4',
      city: 'Gaziantep',
    }
  }
  render() {
    return (
      <div className="loginContaier">
        <div
          className="mapBox"
          style={{
            display: 'flex',
            justifyContent: 'left',
            alignItems: 'center',
          }}
        >
          <FiMapPin style={{width:"30%",fontSize:"xx-large" ,color:"orangered"}}></FiMapPin>
            <div style={{marginLeft:"5px",textAlign:"center"}}>
              <p style={{margin:"0px"}}>Konum</p>
              <span>{this.state.city}</span>
            </div>
        </div>
        <div className="userBox" style={{display:"flex"}}>
           <div className='userImgBox'>
            <img src={this.state.img} alt=""  width="100%"/>
           </div>
           <div style={{marginLeft:"5px",textAlign:"center"}}>
              <p style={{margin:"0px"}}>Hesabım</p>
              <span style={{fontSize:"small"}}>{this.state.UserName}</span>
            </div>
        </div>
        <div className="cartBox" style={{display:"flex", justifyContent:"center",alignItems:"center"}}><FaShoppingCart/>Sepetim</div>
      </div>
    )
  }
}

export default UserComponent
