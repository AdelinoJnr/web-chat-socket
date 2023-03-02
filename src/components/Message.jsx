import React, { useState } from 'react'
import { MdSend } from 'react-icons/md';

export default function Message() {
    const [message, setMessage] = useState('');

    const changeInputMessage = ({ target }) => {
        setMessage(target.value)
    }

    return (
        <div>
            <input
                type="text"
                name="message"
                id="message"
                value={message}
                onChange={changeInputMessage}
            />

            <button type="submit">
                <MdSend />
            </button>
        </div>
    )
}
