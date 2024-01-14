import './App.css';
import React, { useState, useEffect } from 'react';
import Quill from './quill';
import axios from 'axios';

function App() {
  const [name, setName] = useState(null);
  const [description, setDescription] = useState(null);
  const [itemcategory, setItemcategory] = useState(null);
  const [power, setPower] = useState(null);
  const [price, setPrice] = useState(null);
  const [history, setHistory] = useState(null);
  const [major, setMajor] = useState(null);
  const [size, setSize] = useState(null);

  const saveItem = () => {
    axios.post('http://localhost:3535' + '/api/addEnchantedItem', {name, description, itemcategory, power, price, history, major, size}).then(({ data }) => {
      window.location.reload(false);
    })
  }

  const updateProperty = (type, value) => {
    if (type === 'description') {
      setDescription(value)
    } else if (type === 'power') {
      setPower(value)
    } else if (type === 'price') {
      setPrice(value)
    } else if (type === 'history') {
      setHistory(value)
    }
  }

  return (
    <div className="App">
      <h1>Add Enchanted Item</h1>
      <input placeholder="Name" onChange={e => setName(e.target.value)}></input>
      <Quill type="description" updateProperty={updateProperty} />
      <h2>Item Category</h2>
      <select onChange={e => setItemcategory(e.target.value)}>
        <option>Academic Tools</option>
        <option>Alchemical Substances</option>
        <option>Adventuring Gear</option>
        <option>Armor</option>
        <option>Beverages</option>
        <option>Food_Bread</option>
        <option>Food_Fruit & Vegetables</option>
        <option>Food_Protein</option>
        <option>Food_Nuts</option>
        <option>Food_Spices & Seasonings</option>
        <option>Entertainment</option>
        <option>Fabrics & Ropes</option>
        <option>Household Items</option>
        <option>Illumination</option>
        <option>Jewelry</option>
        <option>Medical Tools</option>
        <option>Musical Instruments</option>
        <option>Personal Containers</option>
        <option>Raw Good</option>
        <option>Relic</option>
        <option>Religious Items</option>
        <option>Shields</option>
        <option>Trade Tools</option>
        <option>Weapons_Axes</option>
        <option>Weapons_Polearms</option>
        <option>Weapons_Sidearms</option>
        <option>Weapons_Swords</option>
        <option>Weapons_Trauma</option>
        <option>Weapons_Thrown</option>
        <option>Weapons_Mechanical Ranged</option>
        <option>Weapons_Firearms</option>
        <option>Works of Art</option>
        <option>Clothing_Accessories</option>
        <option>Clothing_Body</option>
        <option>Clothing_Footwear</option>
        <option>Clothing_Headgear</option>
        <option>Food_Prepped Food</option>
      </select>
      <Quill type="power" updateProperty={updateProperty} />
      <Quill type="price" updateProperty={updateProperty} />
      <Quill type="history" updateProperty={updateProperty} />
      <button className={major ? 'button major' : 'button'} onClick={_ => setMajor(!major)}>Major?</button>
      <p>{major ? "Yes" : "No"}</p>
      <h2>Size</h2>
      <select onChange={e => setSize(e.target.value)}>
        <option>F</option>
        <option>D</option>
        <option>T</option>
        <option>S</option>
        <option>M</option>
        <option>L</option>
        <option>H</option>
        <option>G</option>
        <option>E</option>
        <option>C</option>
      </select>
      <br />
      <h2>Save</h2>
      <button onClick={saveItem}>Save</button>
    </div>
  );
}

export default App;
