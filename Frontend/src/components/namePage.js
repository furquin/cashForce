import React from 'react';
import maosBlue from '../images/maosBlue.png'

export default function NamePage () {

const titles = ['nota fiscal', 'sacado', 'cedente', 'emissão', 'valor', 'status', 'dados do cedente']

  return (
      <div className='flex flex-col justify-start p-0 absolute w-255 h-53 ml-336 mt-104' >
          <div className='flex flex-col justify-start p-0 static w-255 h-53 ml-0 mt-0 grow-0'>
            <div className='flex flex-col justify-center p-0 static w-255 h-28 ml-0 mt-0 grow-0'>
              <div className='p-0 static w-182 h-28 ml-0 mt-0 grow-0'>
                <div className='static w-24 h-24 ml-0 mt-0.5 grow-0 '>
                  <img src={maosBlue} alt='mãos azuis' className='absolute ml-0 mr-0 mt-p14' />
                </div>            
                <p className='static w-149 h-28 ml-33 mt-0 font-sans not-italic font-bold text-2xl grow-0 text-blueCash'>Notas fiscal</p>   
              </div>
              <p className='static w-255 h-20 ml-0 mt-33 font-sans not-italic font-normal text-sm grow-0 text-grayCash '>Visualize as notas fiscais que você tem.</p>  
            </div>
          </div>
      </div>
  );
}