import React from 'react'
import DataNf from '../components/dataNf';
import SideBar from '../components/sideBar'
import Header from '../components/header'
import NamePage from '../components/namePage'




function NotaFiscal() {
  return (
    <div className="flex justify-start w-1560 h-900">
      <SideBar />
      <Header />
      <NamePage />
      <DataNf /> 
    </div>
  )
}

export default NotaFiscal