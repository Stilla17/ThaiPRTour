import React, { useState } from 'react'

const TrueFalse = () => {
    const [open, setOpen] = useState(false);
    const toggleOpen = () => {
        setOpen(!open);
    }

    return {
        open,
        toggleOpen
    }
}

export default TrueFalse