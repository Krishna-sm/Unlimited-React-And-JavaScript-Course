import React, { useState } from 'react'
import AddTodo from './components/AddTodo'
import FilterTodo from './components/FilterTodo'
import AllTodos from './components/AllTodos'

const App = () => {
    const [todos,setTodos] = useState(JSON.parse(localStorage.getItem("todos") ||"[]"))
    const [filter,setSetFilter] = useState('')
  return (
    <>
      <section className=' w-[96%] lg:w-[80%] mx-auto py-12'>
          <AddTodo todos={todos} setTodos={setTodos} />
        <FilterTodo filter={filter} setSetFilter={setSetFilter}  />
        <AllTodos  todos={todos} setTodos={setTodos} filter={filter} />
      </section>
    </>
  )
}

export default App