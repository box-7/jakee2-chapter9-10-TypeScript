
import axios from 'axios';
import './App.css'
import { useState } from 'react'
import { Todo } from './Todo';
import { TodoType } from './types/todo';
import { Text } from './Text';
import { UserProfile } from './UserProfile';
import { User } from './types/user';

const user: User = {
        name: "Taro",
        // hobbies: ["映画", "ゲーム"]
}

export default function App() {
        const [todos, setTodos] = useState<Array<TodoType>>([]);

        const onClickFetchData = () => {
                axios.get<Array<TodoType>>('https://jsonplaceholder.typicode.com/todos')
                .then((res) => {
                        setTodos(res.data)
                })
        }
        // console.log("todos", todos)

        return (
                <div className="App">
                        <UserProfile user={user} />
                        <Text color="red" fontSize="18px" />

                        <button onClick={onClickFetchData}>データ取得</button>
                        {todos.map((todo) => (
                                <Todo
                                        key={todo.id}
                                        title={todo.title}
                                        userId={todo.userId}
                                        completed={todo.completed} 
                                />
                        ))}
                </div>
        );
}



// import { Practice1 } from './practices/Practice1'
// import { Practice2 } from './practices/Practice2';
// import { Practice3 } from './practices/Practice3';
// import { Practice4 } from './practices/Practice4';

// <Practice1 />
// <Practice2 />
// <Practice3 />
// <Practice4 />





// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
