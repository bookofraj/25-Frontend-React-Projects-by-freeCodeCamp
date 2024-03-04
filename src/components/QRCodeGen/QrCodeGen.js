import React, { useState } from 'react'
import QRCode from 'react-qr-code'

function QrCodeGen() {
    const [qrCode, setQrCode] = useState('')

    // const handleGenerate = () => {

    // }
  return (
      <div><h1>QR Code Generator</h1>
      <div>
        <input type="text" value={qrCode} size={50} onChange={(e)=>setQrCode(e.target.value)}
        placeholder='Enter text to generate QR Code' />
        {/* <button> Generate </button> */}
      </div>
      <br />
      <QRCode value={qrCode} size={400} bgColor='#ffff'/>
    </div>
      )
}

export default QrCodeGen