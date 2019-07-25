import React from 'react';
import Message from "./Message";
class Messages extends React.Component{
    render(){
        return(
            <div>
                {this.props.list.map((item)=><Message key={item} uname={item.username} message={item.message} fromme={item.fromme}/>)}
            </div>
        );
    }
}
export default Messages;