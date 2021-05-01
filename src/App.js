import logo from './logo.svg';
import Hello from './hello';
import Wrapper from './Wrapper';
import './App.css';
import Counter from './Counter';
import InputSample from './InputSample';

function App() {
  return (
      <Wrapper>
        <Hello name="react" color="red" isSpecial></Hello>
        <Hello color="blue"></Hello>
        <Counter></Counter>
        <InputSample></InputSample>
      </Wrapper>
  );
}

export default App;
