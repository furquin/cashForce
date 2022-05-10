import React, { useState, useEffect } from 'react';
import { ordersAPI } from '../services/fetchOrders';

export default function DataNf () {
  const [orders, setOrders] = useState();

  useEffect(() => {
    ordersAPI(setOrders);
  }, [setOrders]);

  const values = orders && orders.map((value) => {
    const valor = value.value
    const formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    })
    return formatter.format(valor)
  });

  const dates = orders && orders.map((date) => {
    const data = date.emissionDate.substring(0,10)
     
    return data
  })

  const ArrStatus = ['Pendente de confirmação', 'Pedido confirmado', 'Não reconhece o pedido', 'Mercadoria não recebida', 'Recebida com avaria', 'Devolvida', 'Recebida com devolução parcial', 'Recebida e confirmada', 'Pagamento Autorizado']

  const ArrResultStatus = [];

  orders && orders.forEach((code, index) => {
    switch (code.orderStatusBuyer) {
      case '0':
          ArrResultStatus.push(ArrStatus[0].toLocaleUpperCase())        
        break;
      case '1':
          ArrResultStatus.push(ArrStatus[1].toLocaleUpperCase())        
        break;
      case '2':
          ArrResultStatus.push(ArrStatus[2].toLocaleUpperCase())        
        break;
      case '3':
          ArrResultStatus.push(ArrStatus[3].toLocaleUpperCase())        
        break;
      case '4':
          ArrResultStatus.push(ArrStatus[4].toLocaleUpperCase())        
        break;
      case '5':
          ArrResultStatus.push(ArrStatus[5].toLocaleUpperCase())        
        break;
      case '6':
          ArrResultStatus.push(ArrStatus[6].toLocaleUpperCase())        
        break;
      case '7':
          ArrResultStatus.push(ArrStatus[7].toLocaleUpperCase())        
        break;
      case '8':
          ArrResultStatus.push(ArrStatus[8].toLocaleUpperCase())        
        break;
      default:
          ArrResultStatus.push('Status não encontrado')
        break;
    }
  });


  return (
    <div className='absolute flex items-center p-0 w-1177 h-214 ml-336 mt-176 '>
      <div className='flex static w-1177 h-22 ml-0 mt-0 grow-0'>
        <h1 className='flex justify-center absolute ml-p2 mr-p90 mt-n105 mb-14 font-sans not-italic font-bold text-xs grow-0 text-grayTitle'>NOTA FISCAL</h1>
        <h1 className='flex justify-center absolute ml-p17 mr-p78 mt-n105 mb-14 font-sans not-italic font-bold text-xs grow-0 text-grayTitle'>SACADO</h1>
        <h1 className='flex justify-center absolute ml-p30 mr-p65 mt-n105 mb-14 font-sans not-italic font-bold text-xs grow-0 text-grayTitle'>CEDENTE</h1>
        <h1 className='flex justify-center absolute ml-p42 mr-p53 mt-n105 mb-14 font-sans not-italic font-bold text-xs grow-0 text-grayTitle'>EMISSÃO</h1>
        <h1 className='flex justify-center absolute ml-p55 mr-p41 mt-n105 mb-14 font-sans not-italic font-bold text-xs grow-0 text-grayTitle'>VALOR</h1>
        <h1 className='flex justify-center absolute ml-p69 mr-p26 mt-n105 mb-14 font-sans not-italic font-bold text-xs grow-0 text-grayTitle'>STATUS</h1>
      </div>
      
      <div className='mt-19' >
          {orders && orders.map((order, index) => 
            <div className='flex bg-white box-border rounded-md border-borderCash border static w-1177 h-48 ml-0 mt-38 grow-0' key={order.id}>  
              <div className="absolute w-30 h-18 ml-30 mt-15">
                <p className='font-sans not-italic font-normal text-sm text-grayTable'>{ order.nNf }</p>
              </div>
              <div className="absolute w-86 h-18 ml-201 mt-15">
                <p className='font-sans not-italic font-normal text-sm text-grayTable' >{ order.buyer.name }</p>
              </div>
              <div className="absolute w-94 h-18 ml-355 mt-15">
                <p className='font-sans not-italic font-normal text-sm text-grayTable'>{ order.provider.name }</p>
              </div>
              <div className="absolute w-77 h-18 ml-499 mt-15">
                <p className='font-sans not-italic font-normal text-sm text-grayTable'>{dates[index]}</p>
              </div>
              <div className="absolute w-87 h-18 ml-648 mt-15">
                <p className='font-sans not-italic font-normal text-sm text-grayTable'>{ values[index] }</p>
              </div>
              <div className="absolute w-59 h-18 ml-800 mt-15">
                <p className='font-sans not-italic font-normal text-sm text-greenCash'>{ ArrResultStatus[index] }</p>
              </div>
              <div className='w-165 h-32 flex justify-center px-2  box-border border border-borderBlue rounded-3xl absolute mt-2 mb-2 ml-1004'>
                <p className=' static w-107 h-16 ml-29 mt-2 grow-0 font-sans not-italic font-bolt text-xs text-grayCash'>Dados do cedente</p>
              </div>
            </div>
            
            
            )
        }
      </div>  
    </div>
  );
}