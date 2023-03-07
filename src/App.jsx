import './App.css';
import ListItems from './components/ListItems';
import Movies from './components/Movies';
import Pagination from './components/Pagination';
import FormLib from './components/FormLib';
import { ItemsContext } from './components/context';
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';
// import RegisterAndLogin from './components/RegisterAndLogin';

function App() {
  const navigate = useNavigate()

  const [numSpace, setNumSpace] = useState(4); 
  const [data, setData] = useState([]);
  const [partData, setPartData] = useState([]);
  const [slicesNum, setSlicesNum] = useState([]);

  useEffect(() => {
      console.log("mount")
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {console.log(response.data); setData(response.data); setPartData(response.data.slice(0, numSpace));
        setSlicesNum( () => {
          let newArr = [];
          for(let i = 0; i < Math.ceil(response.data.length / numSpace); i++){
            newArr.push(i+1)
          }
          return newArr;
        })
      })
      .catch((err) => console.log(err));
  }, [numSpace])

  const [itemStatus, setItemStatus] = useState('red');

  const items = {
    name: "ball",
    price: 80,
    itemStatus,
    setItemStatus
  }

  return (
    <ItemsContext.Provider value={items}>
      <div className="App">
        <h1>Welcome !</h1>
        <div className={`status status-${itemStatus}`}></div>
        {/* <button onClick={() => navigate('/register-and-login')}>Go to Register and Login</button> */}
        <button onClick={() => navigate('/sign-in')}>Go to Sign in</button>
        <button onClick={() => navigate('/')}>Go to Movies</button>
        <button onClick={() => navigate('/to-do')}>Go to ToDo List</button>
        <button onClick={() => navigate('/pagination')}>Go to Pagination</button>
        <hr />
        <Routes>
          <Route path='/' element={<Movies />} />
          <Route path='/to-do' element={<ListItems />} />
          <Route path='/Pagination' element={<Pagination setSlicesNum={setSlicesNum} setPartData={setPartData} partData={partData} data={data} numSpace={numSpace} setNumSpace={setNumSpace} slicesNum={slicesNum}/>} />
          <Route path='/sign-in' element={<FormLib />} />
          {/* <Route path='/register-and-login' element={<RegisterAndLogin />} /> */}
        </Routes>
      </div>
    </ItemsContext.Provider>
  );
}

export default App;
