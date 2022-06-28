
import { useState } from 'react';
import { Button } from './../../components/Button/Button';

export const Counter = () => {
    // count state
    const [count, setCount] = useState(0);
    // (+)
    const incrementCounter = () => {
        setCount(count + 1);
    }
    // (-)
    const decrementCounter = () => {
        if(count > 0) {
            setCount(count - 1);
        }
    }

    return (
        <main className="my-5 mx-auto">
            <h1>{count}</h1>

            <Button
            bgColor="primary"
            count={count}
            text="+"
            action={incrementCounter}
            />

            <Button
            bgColor="secondary"
            count={count}
            text="-"
            action={decrementCounter}
            />
        </main>
    );
}