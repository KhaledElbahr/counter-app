
import { useDispatch, useSelector } from 'react-redux';
import { incrementCount, decrementCount } from '../../redux/features/counterSlice';
import { Button } from './../../components/Button/Button';

const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counterSlice.counter)
    // (+)
    const incrementCounter = () => {
        dispatch(incrementCount(1))
    }
    // (-)
    const decrementCounter = () => {
        if(count > 0) {
            dispatch(decrementCount(1))
        }
    }

    return (
        <main className="my-5 text-center">
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

export default Counter;