import React from 'react'
import DataNf from '../components/dataNf';
import SideBar from '../components/sideBar'


function NotaFiscal() {
  return (
    <div className="flex justify-start w-1560 h-900">
      <SideBar />
      < DataNf /> 
    </div>
  )
}

export default NotaFiscal