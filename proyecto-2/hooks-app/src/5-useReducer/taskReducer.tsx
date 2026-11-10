import { useReducer } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskState {
  todos: Todo[];
  length: number;
  completed: number;
  pending: number;
}

export const taskReducer = (state: TaskState, action): TaskState => {
  return state;
};

const initialState = 0;

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;

    case "DECREMENT":
      return state - 1;

    case "RESET":
      return 0;

    default:
      return state;
  }
}

function Contador() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Contador: {count}</h2>

      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        Incrementar
      </button>

      <button onClick={() => dispatch({ type: "DECREMENT" })}>
        Decrementar
      </button>

      <button onClick={() => dispatch({ type: "RESET" })}>Resetear</button>
    </div>
  );
}

export default Contador;
