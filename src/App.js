import './App.css';
import Profile from './components/Profile'



function App() {
  // we want to pas this data down to the Profile component
  const otherProfile = {
      name:'Rocco',
      email: 'rocco@ga.co'
  }

  return (
  
    <div className="App">
      <h1>Congo Basin</h1>
      <h6>(amazon clone)</h6>
      <Profile other={otherProfile}></Profile>
    </div>
  );
}

export default App;
