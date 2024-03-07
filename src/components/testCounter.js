import useCounterStore from "../store/couterStore";
const TestCounter = () => {
    const { count } = useCounterStore();
    return (
        <div>
            This is my testing component
            <p>  count is {count}</p>
        </div>
    );
}

export default TestCounter;