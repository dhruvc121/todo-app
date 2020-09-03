import React, {useState,useEffect} from 'react';
import './App.css';
import db from './firebase';
import firebase from 'firebase';
function App() {
	const [todos,setTodos]=useState([])
	const [input,setInput]=useState('')

	useEffect(()=>{
		db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot=>{
				setTodos(snapshot.docs.map(doc=>({id: doc.id, todo :doc.data().todo})))
			})	
	},[]);
	
	const addTodo=(event)=>{
			event.preventDefault();
			db.collection('todos').add({
					todo: input,
					timestamp: firebase.firestore.FieldValue.serverTimestamp()
				})
			setInput('');
		}
	return (
    <div className="App">
      <h1>welcome to Todo app!!</h1>
      <form >
      <input value={input} onChange={event=>setInput(event.target.value)} />
      <button disabled={!input} type="submit" onClick={addTodo}>Add</button>
      </form>
      <ul>
		{todos.map(todo=>{
				return(<>
				<li>{todo.todo}</li>
				<button onClick={event => db.collection('todos').doc(todo.id).delete()}>done</button>
				</>)
				})}		
      </ul>
    </div>
  );
}

export default App;
