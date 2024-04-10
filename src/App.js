import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state={
      db : [
        {name : "Omar",isDone : false, id : Math.random()},
        {name : "Abdelwaheb",isDone : false, id : Math.random()},
        {name : "Omar",isDone : false, id : Math.random()}
      ],
      textP : ""
    }
  }

  addData=()=> this.setState({db : [...this.state.db,{name : this.state.textP,isDone : false, id : Math.random()}],textP : ''})
  deleteData=(delID)=> this.setState({db : this.state.db.filter((el,i,t)=>el.id !== delID ) }) 
  doneData=(doneID)=> this.setState({db : this.state.db.map((el,i,t)=> el.id === doneID ? {...el,isDone : !el.isDone} : el)})
  render(){
    return(
      <div>
        <h1>Correction Chall State</h1>

        {
          this.state.db.map((el,i,t)=> 
          <div>
            <h2 className={el.isDone && 'under'}>{el.name}</h2>
            <h3>{el.isDone ? 'TRUE' : 'FALSE'}</h3>
            <button onClick={()=> this.doneData(el.id)}>Done</button>
            <button onClick={()=>this.deleteData(el.id)}>Delete</button>
          </div>
          )
        }
        <br/>
        <br/>
        <input value={this.state.textP} type='text' onChange={(e)=> this.setState({textP : e.target.value}) }/>
        <button onClick={this.addData}>Ajouter</button>
      </div>
    )
  }
}

export default App;