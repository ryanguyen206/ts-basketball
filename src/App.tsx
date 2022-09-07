import React, {useState}from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List'
import AddToList from './components/AddToList';

export interface IState {
  people : {
    name: string
    age: number
    url: string
    notes?: string
  }[]
}

function App() {


  const [people, setPeople] = useState<IState["people"]>([{
    name: "Lebron James",
    age: 36,
    url: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
    notes: "Almost the Goat"
  }]);


  
  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people}/>
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
