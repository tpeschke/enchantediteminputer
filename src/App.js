import './App.css';

import Quill from './quill';
import axios from 'axios';

function App() {
  let enchantedItem = {
    name: null,
    description: null,
    itemcategory: null,
    power: null,
    price: null,
    history: null,
    major: false,
    size: null
  }

  const updateProperty = (type, value) => {
    enchantedItem[type] = value
  }

  const saveItem = () => {
    axios.post('http://localhost:3535' + '/api/addEnchantedItem', enchantedItem).then(({ data }) => {
      window.location.reload(false);
    })
  }

  return (
    <div className="App">
      <h1>Add Enchanted Item</h1>
      <input placeholder="Name" onChange={e => updateProperty('name', e.target.value)}></input>
      <Quill type="description" updateProperty={updateProperty} />
      <h2>Item Category</h2>
      <select onChange={e => updateProperty('itemcategory', e.target.value)}>
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
      <button className={enchantedItem.major ? 'button major' : 'button'} onClick={_ => updateProperty('major', !enchantedItem.major)}>Major?</button>
      <h2>Size</h2>
      <select onChange={e => updateProperty('size', e.target.value)}>
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
