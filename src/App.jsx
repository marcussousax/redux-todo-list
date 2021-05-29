import React from 'react'
import { useSelector } from 'react-redux'
import './App.css'
import { selectTodos } from './store/Todos/Todos.selectors'
import Header from './components/Header'
import Footer from './components/Footer'
import List from './components/List'
import ListItem from './components/List/ListItem'

function App() {

    const todos = useSelector(selectTodos)

    const [inputValue, setInputValue] = React.useState('')

    return (
        <div className="App">
            <Header />
            {todos.length === 0 ? (
                    <div className={'app-blankstate'}>
                        <p>(╯°□°）╯︵ ┻━┻</p>
                        <p>You don’t have any todos yet.</p>
                    </div>
                ) :
                <List>
                    {todos.map((item, index) =>
                        <ListItem key={index} item={item} />
                    )}
                </List>
            }
            <Footer inputValue={inputValue} setInputValue={setInputValue} />
        </div>
    )
}

export default App
