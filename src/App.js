import logo from './logo.svg';
import Hello from './hello'
import './App.css';

function App() {
  const name = 'React';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem'
  }
  return (
      <>
        <Hello name="react" color="red"/>
        <Hello color="pink"/>
        <div style={style}>{name}</div>
        <div className="gray-box"></div>
      </>
  );
}

export default App;
