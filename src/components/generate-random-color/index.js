import React, { useState } from 'react'
import './styles.css';

function GenerateRandomColor() {
    const [type, setType] = useState('');
    const [color, setColor] = useState('Click Button');
    
    function randomColorUtil(len){
        return Math.floor(Math.random()*len);
    }

    function generateRandomHexColor(){
        setType('hex');
        const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
        let temp = '';
        for(let i=0; i<6; i++){
            temp += hex[randomColorUtil(hex.length)];
        }
        setColor(`#${temp}`);
        // console.log('-x-x-x-');
        // console.log("Type: ",type);
        // console.log("Color: ",color);
    }

    function generateRandomRGBColor(){
        setType('rgb');
        const r = randomColorUtil(256);
        const g = randomColorUtil(256);
        const b = randomColorUtil(256);
        setColor(`rgb(${r},${g},${b})`);
        // console.log('-x-x-x-');
        // console.log("Type: ",type);
        // console.log("Color: ",color);
    }
  return (
    <div className='wrapper' 
        style={{
            background: color}}
            >
        <div className="container1">
        <button onClick={generateRandomHexColor}>Generate Random HEX Color</button>
        <button onClick={generateRandomRGBColor}>Generate Random RGB Color</button>
        </div>
        <div className="container2">
            <h3>
                {type} Color Code: {color}
            </h3>
        </div>
    </div>
  )
}

export default GenerateRandomColor