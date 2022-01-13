import './App.css';

const FunctionalComponent = ({parameterAsProps}) => {
  return (
    <h1>
      {parameterAsProps} 
    </h1>
  )
}

function App() {
  return (
    <div className="App">
      <FunctionalComponent parameterAsProps="ThisIsHowPropsArePassed"></FunctionalComponent>
    </div>
  );
}

export default App;
