import { useState } from "react";

const InputButton = () => {
    const [inputValue, setinputValue] = useState ()
    const [showValue, setShowValue] = useState(false)
    const onChangeInput = (event) => {
        setinputValue(event.target.value)
    }

    const handleShowValue = () => {
        setShowValue(!showValue)
    }
    return (
        <div>
            <input 
            value={inputValue}
            onChange={onChangeInput}
            />
            <button onClick={handleShowValue}>Exibir</button>
            {
                showValue ? <h4>inputValue</h4> : <></>
            }
        </div>
    );
}

export default InputButton;