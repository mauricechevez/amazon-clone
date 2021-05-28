import React,{useState, useEffect} from 'react'
import axios from 'axios'
/* 
Profile Page is going to do the following:
1. useState for our name, email, street, city, state, zipcode (REACT HOOK)
2. useEFfect for accessing github api to grab use data (REACT HOOK)
3. create some functions that handle editing our info in profile
4. Create a button tht changes the to the other profile
*/

const Profile = (props) =>{
    const [name, setName] = useState('Maurice Chevez')
    const [email, setEmail] = useState('maurice@gmail.com')
    const [street, setStreet] = useState('50-50 Bullet Street')
    const [city, setCity] = useState('Crimeville')
    const [state, setState] = useState('New York')
    const [zip, setZip] = useState(10021)
    const [username, setUserName] = useState('')

    useEffect(() => {
       // use for an API 
        let url = 'https://api.github.com/users/mauricechevez'
        axios.get(url)
        .then(response =>{
            console.log(response.data)
            setUserName(response.data.login)
        })
    }, [])

    const addName = ()=>{   
        console.log(props)    
        setName(props.other.name)
    }

   const updateName = (e)=>{
        e.preventDefault();
         let newName = e.target.elements.name.value //used in a FORM. Grab elements
         setName(newName)

    }
    return(
        <div>
            <h1>Profile</h1>
            <hr />
            <h2>{name}</h2>
            <button onClick={addName}>Add Other Name</button>
            <p>{email}</p>
            <p>{street}</p>
            <p>{city}</p>
            <p>{state}</p>
            <p>{zip}</p>
    <form onSubmit={updateName}>
    <label htmlFor='name'>Name</label>
    <input id='name' name='name' type='text' placeholder='Enter a name'></input>
    <button type='submit'>Change Name</button>
    </form>
    <h2>My username is {username}  </h2>

        </div>
    )
}
export default Profile