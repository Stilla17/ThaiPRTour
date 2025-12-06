import React, { useState } from 'react'
import { AutoComplete } from "primereact/autocomplete";

const AutoComplete = () => {
    const [value, setValue] = useState('');
    const [items, setItems] = useState([]);

    const search = (event) => {
        let _items = [...Array(10).keys()];
        setItems(event.query ? [...Array(10).keys()].map(item => event.query + '-' + item) : _items);
    }
    return (
        <>
            <div className="card flex justify-content-center">
                <AutoComplete value={value} suggestions={items} completeMethod={search} onChange={(e) => setValue(e.value)} dropdown />
            </div>
        </>
    )
}

export default AutoComplete