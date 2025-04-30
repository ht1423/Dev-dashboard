import React from 'react'
import routes from './Routes'
import { Routes, Route } from 'react-router-dom'

function AppRoutes() {
  return (
    <Routes>
        {routes.map(({ path, element }) => {
            return <Route key={path} path={path} element={element}/>
        })}
    </Routes>
  )
}

export default AppRoutes