import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './container/Login'
import Dashboard from './container/Dashboard';
import EmployeeList from './container/EmployeeList';

const App = () => {

  const [login, setLogin] = useState(false);

  return (
    <div>
      <Routes>
        {
          !login ?
            <Route path='/login' element={<Login setLogin={setLogin} />} />
            :
            <>

              <Route path='/' element={<Dashboard />} />
              <Route path='/employee-list' element={<EmployeeList />} />
            </>
        }
        <Route path='/*' element={<Login setLogin={setLogin} />} />
      </Routes>
    </div>
  )
}

export default App