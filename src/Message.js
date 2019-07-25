import React from 'react';

class Message extends React.Component{
    render(){
        if(this.props.fromme)
        {
        return(
            <div style={{color:"blue",paddingTop:15,textAlign:"right"}} >
            {this.props.uname}:{this.props.message}
            </div>
        );}
        else{
            return(<div style={{color:"blue",paddingTop:15,textAlign:"left"}} >
            {this.props.uname}:{this.props.message}
            </div>);
        }
    }
}

export default Message;