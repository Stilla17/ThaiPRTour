import React, { useState } from 'react'
import { InputText } from 'primereact/inputtext';
const Input = () => {
    const [value, setValue] = useState('');
    return (
        <div className="card flex justify-content-center">
            <InputText value={value} onChange={(e) => setValue(e.target.value)} />
        </div>
    )
}

export default Input