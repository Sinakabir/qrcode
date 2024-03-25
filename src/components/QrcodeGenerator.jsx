import React, { useState } from 'react'
import QRCode from 'react-qr-code'
import './Qrcode.css'

const QrcodeGenerator = () => {

const [qrcode,setQrCode] = useState('')
const [input,setInput] = useState('')

function handleGenerateQrCode(){
  setQrCode(input)
  setInput('')
}


  return (
    <div>
      <h1>Qr code Generator</h1>
      <div className='input'>
        <input onChange={(e)=> setInput(e.target.value)} type='text' name='qrcode' placeholder='Enter your value here' value={input}/>
        <button disabled={input && input.trim() !== '' ? false : true} onClick={handleGenerateQrCode}>Generate</button>
      </div>
      <div>
        <QRCode
        id='qrcodevalue'
        value={qrcode}
        size={400}
        bgColor='white'
        />
      </div>
    </div>
  )
}

export default QrcodeGenerator