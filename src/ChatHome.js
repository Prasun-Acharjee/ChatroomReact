import React from 'react';
import ChatApp from './ChatApp';
class ChatHome extends React.Component{
    constructor(props){
        super(props);
        this.state={submitted:false,uname:""}
    }
    click=()=>
    {
        this.setState({submitted:true});
    }
    change=(event)=>
    {
        this.setState({uname:event.target.value},()=>console.log(this.state.uname));
    }
render(){
        if(this.state.submitted){
        return <ChatApp uname={this.state.uname} submit={this.state.submitted}/>;
        }
        else {
        return(<div><input  onChange={this.change} type="text" /> <button onClick={this.click}>Submit</button></div>);
        }    
}
}
export default ChatHome;
