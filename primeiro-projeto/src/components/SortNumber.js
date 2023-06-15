import { useState } from "react";

const SortNumber = () => {
    const [numbers, setNumbers] = useState([2, 5, 1, 8, 6, 40, 9, 2, 19, 2])

    const sortNumbers = () => {
        const sortedNumbers = numbers.sort(function(a, b) {
            return a - b;
        });
        setNumbers(sortedNumbers)
    }

    return (
        <div>
            <h3>Lista de números: </h3>
            <div style={{display: 'flex', gap: '8px'}}>
                {numbers.map(number => <p>{number}</p>)}  
            </div>
            <button onClick={sortNumbers}>Ordenar</button>
        </div>
    );
}
export default SortNumber;