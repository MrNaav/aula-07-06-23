import { useState } from "react";
import Box from "./Box";

const ShowName = () => {
    const [name, setName] = useState()

    const handleShowName = () => {
        if(name) {
            setName(undefined)
        } else {
            setName('Vitor')
        }
    }

    return (
        <Box>
            <button onClick={handleShowName}>Mostrar nome</button>
            <h4>Nome: {name}</h4>
        </Box>
    );
}

export default ShowName;