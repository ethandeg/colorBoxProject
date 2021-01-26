import React, { useState } from 'react'
import { v4 as uuid } from 'uuid';
const NewBoxForm = ({ addBox }) => {
    const INITIAL_STATE = {
        width: '',
        height: '',
        backgroundColor: ""
    }

    const [formData, setFormData] = useState(INITIAL_STATE)
    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }
    const handleSubmit = e => {
        e.preventDefault()
        addBox({ ...formData, id: uuid() })
        setFormData(INITIAL_STATE)
    }

    return (
        <>
            <h3>Create a new Box</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="height">Height</label>
                <input
                    type="text"
                    id="height"
                    name="height"
                    placeholder="height"
                    value={formData.height}
                    onChange={handleChange}
                />
                <label htmlFor="width">Width</label>
                <input
                    type="text"
                    id="width"
                    name="width"
                    placeholder="width"
                    value={formData.width}
                    onChange={handleChange}
                />
                <label htmlFor="backgroundColor">Background Color</label>
                <input
                    onChange={handleChange}
                    type="text"
                    name="backgroundColor"
                    value={formData.backgroundColor}
                    id="backgroundColor"
                />
                <button>Create new Box!</button>
            </form>
        </>
    )
}

export default NewBoxForm