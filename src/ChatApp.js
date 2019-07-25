import React from 'react';
import ChatInput from './ChatInput';
import Messages from "./Messages";
import io from "socket.io-client";
class ChatApp extends React.Component{
    constructor(props){
        super(props);
        this.state={messages:[],type:""}
        this.socket = io('localhost:4001',{query:`username=${props.uname}`});
        this.socket.on("server:message",messageob=>{this.addmessage(messageob)});
        this.socket.on("server:typingStatus",(datan)=>{this.setState({type:datan})});
        
    }
    addmessage=(ob)=>
    {
    
     this.setState({messages:this.state.messages.concat(ob)});   
     
    }
    
    onSend=(text)=>
    {
        var data={
            username:this.props.uname,
            fromme:true,
            message:text
             };
             this.socket.emit('client:message',data);
             this.addmessage(data);
             this.socket.emit('client:typing',null);
            
             //this.utyping(data);
             
    }
    utyping=()=>
    {
        //this.setState({typing:true});
        this.socket.emit('client:typing',`${this.props.uname} is typing`);
    }
    render()
    {   
        return(<div>
        <Messages list={this.state.messages}/>
        <ChatInput addmes={this.onSend} utyping={this.utyping} type={this.state.type}  uname={this.props.uname}/>
        
        </div>
        );
    }
}

export default ChatApp;
