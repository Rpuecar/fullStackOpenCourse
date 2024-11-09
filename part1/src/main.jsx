import ReactDOM from 'react-dom/client'

import App from './App'
import Hello from './Hello'

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <App/>
        <h1>Hello</h1>
        <Hello name="Maya" age={26}/>
    </>)