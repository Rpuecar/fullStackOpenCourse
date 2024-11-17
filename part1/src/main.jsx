import ReactDOM from 'react-dom/client'

import App from './App'
import Hello from './Hello'
import Counter from "./components/Counter.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <App/>
        <h1>Hello</h1>
        <Hello name="Maya" age={35}/>
        <Counter/>
    </>)



