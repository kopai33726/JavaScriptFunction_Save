    let state;
    function useState(initialValue) {
        state = state || initialValue;
        function getState() {
            return state;
        }
        function setState(newState) {
            state = newState;
        }
        return[getState, setState]
    }

    // test function
    const [count, setCount] = useState(0);
    console.log(count())
    setCount(1)
    console.log(count());
