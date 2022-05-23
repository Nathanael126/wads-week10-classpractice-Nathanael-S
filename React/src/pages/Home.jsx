import React, {Component} from "react";

class Home extends React.Component {

  constructor(props){
    super(props);
    this.state={heroes:[]}
  }

  refreshList(){
    fetch('http://localhost:8000/heroes/')
    .then(response=>response.json())
    .then(data=>{
      this.setState({heroes:data});
      console.log('Data: ', data);
    });
  }

  componentDidMount(){
    this.refreshList();
  }

  componentDidUpdate(){
    this.refreshList();
  }

  render(){
    const {heroes}=this.state;
    return (
      <div>
        <table>
          <tr>
            <th>Name</th>
            <th>Alias</th>
          </tr>
          {heroes.map(hero=>
            <tr>
              <td>{hero.name}</td>
              <td>{hero.alias}</td>
            </tr>
            )}

        </table>
      </div>
    );
  }
}

export default Home;