import React from 'react';
class ChatInput extends React.Component{
    constructor(props){
        super(props);
        this.state={message:""}
    }
    
       render(){
        return(<div style={{position:"fixed",bottom:5}}>    
            <input style={{width:1200,height:50}} value={this.state.message} type="text" onChange={(event)=>{this.setState({message:event.target.value})}}/>
            <button style={{width:100,height:55,color:"green",background:"yellow"}} onClick={()=>{this.props.addmes(this.state.message); this.setState({message:""})}}>Send</button>
            </div>
        );
    }
}
export default ChatInput;