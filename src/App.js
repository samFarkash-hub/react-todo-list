import { useState } from 'react';
import './App.css';

function App() {
  let [myList, setmyList] = useState([]);
  let props_in = { myList, setmyList };

  let myList2 = myList.map((x) => <p>{x}</p>);
  return (
    <div className="App">
      <h1>To Do list</h1>
      <AddItemToList props_in={props_in} />
      {myList2}
      <RemoveItem props_in={props_in} />
    </div>
  );
}

function AddItemToList(props) {
  let { myList, setmyList } = props.props_in;
  let onClickFn = () => AddItem(myList, setmyList);
  return (
    <button style={{ backgroundColor: "lightgreen" }} onClick={onClickFn}>
      <p>Add Item </p>
    </button>
  );
}
function ListItem() {
  //let onClickFn = () => deleteItem(myList, setmyList,index);
  return (<>
    <input type="text" />
    <input type="checkbox" />  
  </>);
}
//{button onClick={onClickFn}>❌</button>}
function AddItem(myList, setmyList) {
  let myListCopy = [...myList];
  myListCopy.push(<ListItem />);
  setmyList(myListCopy);
}

function RemoveItem(props){

  let { myList, setmyList } = props.props_in;
  let onClickFn = () => remove(myList, setmyList);
  return (
    <button style={{ backgroundColor: "red" }} onClick={onClickFn}>
      <p>remove Item </p>
    </button>
  );

}
function remove(myList, setmyList){
  let myListCopy = [...myList];
  myListCopy.pop();
  setmyList(myListCopy);
}

export default App;
