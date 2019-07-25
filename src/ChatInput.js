import React from 'react';
class ChatInput extends React.Component{
    constructor(props){
        super(props);
        this.state={message:""}
    }
    
    /*change=()=>
    {
        this.props.list.typing=true;
    }*/
    /*combined=(event)=>
    {
        //this.change();
        this.setState({message:event.target.value});
        //this.props.utyping;
    }*/
    
       render(){
        return(<div style={{position:"fixed",top:610}}>
           {this.props.type}<br/>
        
            <input style={{width:1200,height:50}} value={this.state.message} type="text" onChange={(event)=>{this.props.utyping();this.setState({message:event.target.value})}}/>
            <button style={{width:100,height:55,color:"green",background:"yellow"}} onClick={()=>{this.props.addmes(this.state.message); this.setState({message:""})}}>Send</button>
            </div>
        );
    }
}
export default ChatInput;