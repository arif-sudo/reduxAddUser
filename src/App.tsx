import { useDispatch } from 'react-redux'
import { addUser } from './redux/action'
import { useSelector } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  const userData:any = useSelector(state => state)

  const handleClick = () => {
    dispatch(addUser({name: "Arif", surname: "Mammadov", age: 18, id: 1}))
  }
  return (
    <>
      <ol style={{fontSize: "30px"}}>
        {userData.map((elem:any, index:number) => (
          <li key={index}>
            <h1>{elem.name} {elem.surname}</h1>
            <h3>{elem.age}</h3>
          </li>
      ))}
      </ol>
      <button onClick={handleClick} className='btn btn-outline-dark' >
        Dispatch
      </button>
    </>
  )
}

export default App