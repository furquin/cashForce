import React from 'react';
import logo from '../images/logo.png'
import maosGreen from '../images/maosGreen.png'


export default function DataNf () {

  return (
    <div className='bg-whiteCash ml-0 absolute w-288 h-900 ml-0 mt-0 '>
      <div className='flex flex-col items-center p-0 absolute w-288 h-144'>
        <div className='flex flex-col p-0 static w-288 h-80 ml-0 mt-0 grow-0'>
          <div className="static w-288 h-80 ml-0 mt-0 grow-0">
                <img className='w-160 h-30 ml-6 mt-6 absolute' src={logo} alt="logo cashforce "/>
          </div>
        </div>
        <div className="flex flex-col items-start p-0 static w-288 h-64 ml-0 mt-80 grow-0">
          <div className='flex items-center  justify-items-start p-0 static w-149 h-64 ml-0 mt-0 grow-0'>
            <div className='flex items-center px-2.5 static w-4 h-84 mt-n10 grow-0'>
              <div className=' bg-greenCash absolute w-4 h-64 ml-0 mt-10 grow-0' />
            </div>
            <div className='flex items-center p-0 static w-124 h-44 ml-25 mt-10 grow-0'>
              <div className='flex items-center px-2.5 w-24 h-44 ml-0 mt-0 grow-0'>
                <div className='w-24 h-24 static ml-0 mr-0 mt-p22 mb-p22 grow-0'>
                  <img className=" absolute w-24 h-14" src={maosGreen} alt='mãos verdes' />
                </div>
              </div>
              <div className='flex content-center mt-n10 px-2.5 static w-90 h-44 ml-39 mt-0 grow' >
                <p className="static w-85 h-18 ml-0 mt-13 flex items-center text-greenCash grow-0 font-sans not-italic font-medium text-sm ">Nota fiscal</p>
              </div>
            </div>
          </div>
        </div>   
      </div>
  
    </div>
  );
}