import React, { useState } from 'react'
import MenuList from './menu-list'
import { FaPlus , FaMinus } from 'react-icons/fa'

function MenuItem({ item }) {
    const [dispCurrChilds, setDispCurrChilds] = useState({})

    const handleToggleChild = (getCurrLabel) => {
        setDispCurrChilds({
            ...dispCurrChilds,
            [getCurrLabel]: !dispCurrChilds[getCurrLabel],
        });

        console.log(dispCurrChilds);

    }
    return (
        <li>
            <div className='list-item' style={{ display: 'flex', gap: '20px' }}>
                <p>{item.label}</p>
                {item && item.children && item.children.length > 0
                    ? <span  onClick={()=>handleToggleChild(item.label)}>
                        {
                            dispCurrChilds[item.label] ? <FaMinus color='#fff' size={25}/> : <FaPlus color='#fff' size={25}/>
                        }
                    </span>
                    : null}
            </div>
            {
                item && item.children && item.children.length && dispCurrChilds[item.label] > 0
                    ? <MenuList  list={item.children} />
                    : null
            }
        </li>
    )
}

export default MenuItem