Hooks :- React Hooks are special built-in functions introduced in React 16.8 that allow functional components to use React features such as state management, lifecycle methods, context, and references without writing class components.

<!-- or -->

Hooks are special functions in React that help us manage data, handle side effects, access DOM elements, and reuse logic inside functional components.

useState(controlled component) :- react manage the form and change its state
useRef (uncontrolled component) :-dom manage form
useEffect
useContext
useMemo
useCallback
useReducer
useLayoutEffect


useState :-
useState is a React Hook that allows functional components to create and manage local state. It returns an array containing the current state value and a function to update that value.

<!-- or -->
useState is used to store data inside a component. When the state changes, React automatically re-renders the component to display the updated value.

syntax:-
const[state , setState] = useState(initialvalue)

state: Current value.
setState: Function to update the value.
initialValue: Default value.

useRef :-

useRef is a React Hook that creates a mutable reference object whose .current property persists between renders without causing a re-render when updated.
<!-- or -->

useRef is used to access DOM elements directly or store values that should remain available between renders without updating the UI.

const myRef = useRef(initialValue);

useEffect:-

useEffect is a React Hook that allows functional components to perform side effects such as API calls, subscriptions, timers, and DOM-related operations.

<!-- or -->

useEffect is used when we want to perform some task after a component renders, such as fetching data from an API or setting up a timer.

Syntax:
useEffect(() => {
    // Side effect code

    return () => {
        // Cleanup code
    };
}, [dependencies]);

Three important useEffect cases:

1. Without dependency array
useEffect(() => {
    console.log("Component rendered");
});

Runs after every render.

2. Empty dependency array
useEffect(() => {
    console.log("Component mounted");
}, []);


Runs after the initial mount only (with development Strict Mode, React may run an additional setup-cleanup cycle).

3. With dependency array
useEffect(() => {
    console.log("Count updated");
}, [count]);


Runs after the initial mount and when count changes.