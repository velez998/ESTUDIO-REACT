import * as z from "zod";
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

export type TaskAction =
  | { type: "ADD_TODO"; payload: string }
  | { type: "TOGGLE_TODO"; payload: number }
  | { type: "DELETE_TODO"; payload: number };

const TodoSchema = z.object({
  id: z.number(),
  text: z.string,
  completed: z.boolean,
});

const TaskStateSchema = z.object({
  todos: z.array(TodoSchema),
  length: z.number,
  completed: z.number,
  pending: z.number,
});

export const getTaskInitialState = (): TaskState => {
  //Almacenamiento local
  const localStorageState = localStorage.getItem("task-state");
  if (!localStorageState) {
    // Si es distinto del localStorage entonces se resetea
    return {
      todos: [],
      length: 0,
      completed: 0,
      pending: 0,
    };
  }

  //Validar con ZOD
  const result = TaskStateSchema.safeParse(JSON.parse(localStorageState));

  if (result.error) {
    console.log(result.error);
    return {
      todos: [],
      length: 0,
      completed: 0,
      pending: 0,
    };
  }

  return JSON.parse(localStorageState);
};

export const taskReducer = (
  state: TaskState,
  action: TaskAction,
): TaskState => {
  switch (action.type) {
    case "ADD_TODO": {
      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };

      return {
        ...state,
        length: state.todos.length + 1,
        pending: state.pending + 1,
        todos: [...state.todos, newTodo],
      };
    }

    case "DELETE_TODO": {
      const currentTodos = state.todos.filter(
        (todo) => todo.id !== action.payload,
      );

      return {
        ...state,
        todos: currentTodos,
        length: currentTodos.length,
        completed: currentTodos.filter((todo) => todo.completed).length,
        pending: currentTodos.filter((todo) => !todo.completed).length,
      };
    }

    case "TOGGLE_TODO": {
      const updatedTodos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      return {
        ...state,
        todos: updatedTodos,
        completed: updatedTodos.filter((todo) => todo.completed).length,
        pending: updatedTodos.filter((todo) => !todo.completed).length,
      };
    }

    default:
      return state;
  }
};

//-------------------------------------------------------

const initialState = 0;

function reducer(state: any, action: any) {
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
