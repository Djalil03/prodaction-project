import React, { useContext, useState } from 'react'
import { Counter } from './components/Counter'
import './styles/index.scss'
import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { AboutPageAsunc } from './pages/AboutPage/AboutPage.async'
import { MainPageAsync } from './pages/MainPage/MainPage.async'
import { Suspense } from 'react'
import { ThemeContext, Theme } from './theme/ThemeContext'
import { useTheme } from './theme/useTheme'
import { classNames } from './helpers/classNames/classNames'




const App = () => {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE THEME</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/about' element={<AboutPageAsunc/>}> </Route>
          <Route path='/' element={<MainPageAsync/>}> </Route>
        </Routes>
      </Suspense>
    </div>
  )
}

export default App