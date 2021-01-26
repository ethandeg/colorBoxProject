import React, { useState } from 'react'
import NewBoxForm from './NewBoxForm'
import { v4 as uuid } from 'uuid';
import Box from './Box'
const BoxList = () => {
    const INITIAL_STATE = [
        { id: uuid(), backgroundColor: "red", height: 200, width: 200 },
        { id: uuid(), backgroundColor: "blue", height: 100, width: 250 }
    ]
    const [boxes, setBoxes] = useState(INITIAL_STATE)
    const addBox = (newBox) => {
        console.log(newBox)
        setBoxes(boxes => [...boxes, newBox])
    }
    const remove = (id) => {
        setBoxes(boxes => boxes.filter(box => box.id !== id))
    }
    return (
        <>
            <NewBoxForm addBox={addBox} />
            <div>
                {boxes.map(({ id, backgroundColor, height, width }) => <Box
                    id={id}
                    backgroundColor={backgroundColor}
                    height={height}
                    width={width}
                    key={id}
                    handleRemove={remove} />)}
            </div>
        </>
    )
}

export default BoxList;