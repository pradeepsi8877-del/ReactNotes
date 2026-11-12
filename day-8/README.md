useMemo :-useMemo is a react hook that memorizes the result of a calculation and recomputes it only when its dependencies change

<!-- or -->
useMemo stores the result of an expensive calculation so react dosen't need to calculate the same result again on every render.

syntax:-
const Memo = useMemo(()=>{
    return calculation;
},[dependencies]);


useCallback:-useCallback is a react hook that memorizes a function definition and returns the same function reference until its dependencies change.

<!-- or -->
useCallback remembers a function so react does not create a new function reference on every render unless its dependencies change.

syntax:-
const RemFunction = useCallback(()=>{
  // function logic
},[dependencies])


useReducer :-useReducer is similar to useState , but it is useful when state management involves multiple actions or complex conditions.

<!-- or -->
useReducer is a react hook used to manage complex state logic. it updates state through a reducer function based on the dispatch action .

syntax:-
const[state,dispatch] = useReducer(reducer, initialState);

useLayoutEffect :- useLayoutEffect is a react HOOk that runs its effect synchronously after dom mutations but before the browser paints the updated screen .

<!-- or -->
useLayoutEffect is used when we need to measure or update the dom before the user sees the screen.

syntax:-
useLayoutEffect(()=>{
    //Dom measurement or update 
},[dependencies])
