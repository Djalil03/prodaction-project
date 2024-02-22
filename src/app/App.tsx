import React, { useContext, useState } from 'react'
import './styles/index.scss'
import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { MainPageAsync } from 'pages/MainPage/ui/MainPage.async'
import { Suspense } from 'react'
import { ThemeContext, Theme } from './providers/ThemeProvider/lib/ThemeContext'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from './providers/ThemeProvider'
import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { useTranslation } from 'react-i18next'





const App = () => {
  const {theme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar/>
        <div className='content-page'>
          <Sidebar/>
          <AppRouter/>
        </div>
      </Suspense>
    </div>
  )
}

export default App