import React, {Component} from "react";

export class CreatePost extends Component{
  constructor(props){
    super(props);
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    fetch('http://localhost:8000/heroes/',{
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            name:event.target.name.value,
            alias:event.target.alias.value
        })
    })
    .then(res=>res.json())
    .then((result)=>{
        alert(result);
    },
    (error)=>{
        alert('Failed');
    })
}
  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input id='Name' controlId='name' type='text' name='name' placeholder="Name"></input>
          <input id='Alias' controlId='alias' type='text' name='alias' placeholder="Alias"></input>
          <input id='Submit' type='submit' name="submit"></input>
        </form>
      </div>
    );
  }
}

export default CreatePost;
