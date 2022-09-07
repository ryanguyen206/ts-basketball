import React,{ useState } from 'react'
import {IState as Props} from '../App'

interface IProps {
    people: Props["people"]
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}

const AddToList: React.FC<IProps> = ({people, setPeople}) => {

    const [input, setInput] = useState({
        name:"",
        age:"",
        notes:"",
        img:""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInput({
            ...input, 
            [e.target.name]: e.target.value
        })
    }

    const handleClick = (): void => {
        if (
            !input.name || 
            !input.age || 
            !input.img
        ) {
            return
        }

        setPeople([
            ...people,
            {
                name:input.name,
                age: parseInt(input.age),
                url: input.img,
                notes : input.notes
            }
        ])
    }

  return (
    <div className='AddToList'>
        AddToList
        <input 
            type="text"
            placeholder='Name'
            className='AddToList-input'
            value={input.name}
            onChange = {handleChange}
            name="name"
        />
        <input 
            type="text"
            placeholder='Age'
            className='AddToList-input'
            value={input.age}
            onChange = {handleChange}
            name="age"
        />
        <input 
            type="text"
            placeholder='Image Url'
            className='AddToList-input'
            value={input.img}
            onChange = {handleChange}
            name="img"
        />
          <textarea 
            placeholder='Notes'
            className='AddToList-input'
            value={input.notes}
            onChange = {handleChange}
            name="notes"
        />
        <button
            className='AddToList-btn'
            onClick = {handleClick}
        >
            Add to list
        </button>
    </div>


  )
}

export default AddToList