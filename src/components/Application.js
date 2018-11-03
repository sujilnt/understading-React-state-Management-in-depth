import React, { Component } from 'react';
import uniqueId from 'lodash/uniqueId';
import CountDown from './CountDown';
import NewItem from './NewItem';
import Items from './Items';

import './Application.css';

const defaultState = [
  { value: 'Pants', id: uniqueId(), packed: false },
  { value: 'Jacket', id: uniqueId(), packed: false },
  { value: 'iPhone Charger', id: uniqueId(), packed: false },
  { value: 'MacBook', id: uniqueId(), packed: false },
  { value: 'Sleeping Pills', id: uniqueId(), packed: true },
  { value: 'Underwear', id: uniqueId(), packed: false },
  { value: 'Hat', id: uniqueId(), packed: false },
  { value: 'T-Shirts', id: uniqueId(), packed: false },
  { value: 'Belt', id: uniqueId(), packed: false },
  { value: 'Passport', id: uniqueId(), packed: true },
  { value: 'Sandwich', id: uniqueId(), packed: true },
];

class Application extends Component {
  state = {
    // Set the initial state,
      items: defaultState,
  };

    addItem =(value)=>{
   this.setState((prevState)=>{
       console.log([...prevState.items,value]);
       return {
           items: [...prevState.items,value]
       }
   })
 };
    removepackaedItems= (value)=>{
      const {items} =this.state;
    const filterValue = items.filter((row)=>row.id !== value.id);
    this.setState({
        items:filterValue
    });
  };


  // How are we going to manipulate the state?
  // Ideally, users are going to want to add, remove,
  // and check off items, right?

  render() {
    // Get the items from state
    const {items}=this.state;
      const packedItems = items.filter(row=>row.packed===true);
      const unpackeditems= items.filter(row=>row.packed===false);
    return (
      <div className="Application">
        <NewItem  onSubmit={this.addItem}/>
        <CountDown />
        <Items title="Unpacked Items" items={unpackeditems} removepackaedItems={this.removepackaedItems}/>
        <Items title="Packed Items" items={packedItems} removepackaedItems={this.removepackaedItems}/>
        <button className="button full-width">Mark All As Unpacked</button>
      </div>
    );
  }
}

export default Application;
