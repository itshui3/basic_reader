import { useState } from 'react'

const useInput = () => {
    const [input, setInput] = useState({
        title: '',
        subtitle: '',
        body: ''
    })

    const handleInput = (ev) => {
        setInput({ 
            ...input,
            [ev.target.name]: ev.target.value
        })
    }

    return [input.title, input.subtitle, input.body, handleInput]
}

export { useInput }