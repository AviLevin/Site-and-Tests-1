import React, { Component } from 'react';

class Header extends Component {

    getNameToDis() {
        var date = new Date();
        var hour = date.getHours();

        var name;
    
        if(hour < 12) {
            name = "Morning";
        } else if(hour < 18) {
            name = "AfterNoon";
        } else {
            name = "Evening";
        }
        return name;
    
    }


    getHourComp() {
        var date = new Date();
        var hour = date.getHours();

        return hour;
        var name;
    
        if(hour < 12) {
            name = "Morning";
        } else if(hour < 18) {
            name = "AfterNoon";
        } else {
            name = "Evening";
        }
        
        // const name = "haha";
        var num1 = 2;
        var styles= {color: "red", backgroundColor: "gray"};
    
    }
    
    render () {
        return (
    <div>
      <h1 className="noam" style={this.styles}>Noam From {this.getNameToDis()} TimeZone</h1>
      <p style={{color: "red", backgroundColor: "gray"}}>{this.getHourComp()} + 2 is {this.num1 + 2}</p>
    </div>
  );
    }
  
}

export default Header;