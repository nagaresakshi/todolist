
import { useState, useEffect } from 'react'
import './App.css'
import { db } from './firebase';
import { doc, addDoc, collection, onSnapshot, updateDoc, deleteDoc } from 'firebase/firestore';
import Todolistco from './componanat/Todolistco';
function App() {
  const [todoos, settodoos] = useState([]);
  const [input, setinput] = useState('');
  const [editindex, seteditindex] = useState(-1);

  useEffect(() => {
    const unsubscibe = onSnapshot(collection(db, 'todos'), (snapshot) => {
      settodoos(snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo })));
    }
    );
    return () => unsubscibe();
  }, []);

  const addtodo = async () => {
    try {
      if (input.trim() !== '') {
        // settodoos([...todoos, { id: new Date(), todo: input }]);
        await addDoc(collection(db, 'todos'), { todo: input });
        setinput('');
      }
    } catch (error) {
      console.log(error);
    }
  }
  const edittodo = async (index) => {
    setinput(todoos[index].todo);
    seteditindex(index);
  }

  const updatetodo = async () => {
    try {
      if (input.trim() !== '') {
        const todoref = doc(db, 'todos', todoos[editindex].id);
        await updateDoc(todoref, { todo: input });
        seteditindex(-1);
        setinput('');
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  const deletetodo = async (id) => {
    try {
      await deleteDoc(doc(db, 'todos', id));
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <>
      <div className="min-h-screen flex flex-col gap-4 items-center justify-center p-4 bg-custom-background bg-center bg-contain">
        <div className="bg-blue-900/55 p-6 rounded shadow-md w-full max-w-lg lg:w-3/4">
          <h1 className="text-3xl font-bold text-center">Todo List</h1>
          <div className="flex ">
            <input
              type="text"
              placeholder="add a todo"
              className="py-2 rounded px-4  focus:outline-none w-full mx-2"
              value={input}
              onChange={(e) => { setinput(e.target.value) }} />
            <button onClick={editindex === -1 ? addtodo : updatetodo} className="bg-gradient-to-r from-blue-700 to-blue-400 text-white px-5 rounded py-2 ">
              {editindex === -1 ? "Add" : "edit"}</button></div></div>
        {
          todoos.length > 0 && <Todolistco todoos={todoos} edittodo={edittodo} deletetodo={deletetodo}/>
        }
      </div>
    </>
  )
}

export default App
