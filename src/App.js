
import './App.css';
import Button from '@mui/material/Button'



function App() {
  return (
    <div className="App">
     <div>
      <h1> Lista de tareas </h1>
      <label>
        Nueva Tarea
        <input type='text'></input>
      </label>
      <Button  variant="text" color="primary">
        Guardar
      </Button>
      <Button variant="text" color="secondary">
        Consutar
      </Button>
      <Button variant="text" color="inherit">
        Estado
      </Button>
     </div>
    </div>
  );
}

export default App;
