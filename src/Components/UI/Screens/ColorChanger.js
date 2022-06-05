import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { theme } from '../../Data/features/theme'

export default function ColorChanger() {

    const[color, setColor] = useState()
    const dispatch = useDispatch()
    return (
      <div>
            <input onChange={(value) => setColor(value.target.value) } type='text' placeholder='Enter color...' />
            <button onClick={() => dispatch(theme({theme: color}))}>Alter Theme</button>
      </div>
    )
}

