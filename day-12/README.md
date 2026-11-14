
Tech Question 1: What is Redux and why do we use it?

Ideal Answer:

Redux is a state management library used to manage global application state. We use it when multiple components need to share and update the same state, such as cart, wishlist, or authentication. It provides predictable state updates through actions and reducers.


🔹 1. What is Redux?

Answer:
Redux is a state management library for JavaScript applications, commonly used with React. It helps manage global application state in a predictable way.

Why Redux?

Avoids prop drilling

Centralized state

Easier debugging (Redux DevTools)

📌 Key idea:

State changes are predictable and follow strict rules.

🔹 2. What problems does Redux solve?

Answer:
Redux solves:

Complex state sharing between components

Deep prop drilling

Inconsistent state updates

Difficult debugging in large apps

Example problem:

App → Navbar → Product → Cart → Checkout


Passing props at every level becomes messy → Redux fixes this.


❓ Tech Question 2: Explain Redux data flow

Ideal Answer:

Redux follows a one-way data flow. The UI dispatches an action, the reducer processes it and returns a new state, the store updates the state, and then the UI re-renders based on the updated state.

❓ Tech Question 3: Difference between Redux and Context API?

Ideal Answer:

Context API is suitable for small to medium applications, but Redux is better for large-scale apps because it offers middleware, DevTools, and better debugging. Redux also enforces strict patterns that improve maintainability.

❓ Tech Question 4: Can reducers be asynchronous?

Ideal Answer:

No, reducers must be pure and synchronous. Asynchronous operations are handled using middleware like Redux Thunk or Redux Saga.

❓ Tech Question 5: Explain Redux Toolkit

Ideal Answer:

Redux Toolkit is the official recommended way to write Redux. It reduces boilerplate, uses Immer to allow direct state mutation syntax, and includes built-in support for async logic using createAsyncThunk.

❓ Tech Question 6: How did you implement cart functionality in your project?

Ideal Answer:

I created a cart slice using Redux Toolkit. When a user clicks “Add to Cart,” an action is dispatched, and the reducer updates the global cart state. This state is shared across the product list, navbar, and checkout page, ensuring consistency.

❓ Tech Question 7: How do you increase or decrease quantity in Redux?

Ideal Answer:

I locate the item in the cart using its ID and update the quantity inside the reducer. Redux Toolkit allows this mutation-like syntax safely using Immer.

❓ Tech Question 8: What is useSelector and useDispatch?

Ideal Answer:

useSelector is used to read data from the Redux store, while useDispatch is used to send actions to update the store.

❓ Tech Question 9: What is middleware in Redux?

Ideal Answer:

Middleware allows us to handle side effects like API calls, logging, or authentication before the action reaches the reducer.

dispatch → middleware → reducer

❓ Tech Question 10: How do you optimize performance in Redux?

Ideal Answer:

avoid unnecessary global state, normalize data, and split reducers properly. I also ensure components only subscribe to required state slices.


🔹 21. Redux vs useReducer?
Redux	              useReducer
Global state	      Local state
External library	  Built-in hook
DevTools         	  No DevTools
Middleware	        No middleware

🔹 15. Why is Redux considered predictable?

Answer:
Because:

State updates only via actions

Reducers are pure functions

Same action → same result


🔹 12. What is Redux Thunk?

Answer:
Redux Thunk allows async logic inside actions.

const fetchUsers = () => {
  return async (dispatch) => {
    dispatch({ type: "LOADING" });
    const res = await fetch("/users");
    const data = await res.json();
    dispatch({ type: "SUCCESS", payload: data });
  };
};


📌 Without thunk → Redux only supports synchronous actions.

9. Explain Redux data flow

Answer:

User clicks button

Action is dispatched

Reducer processes action

Store updates state

UI re-renders

📌 One-way data flow


7. What is a Reducer?

Answer:
A reducer is a pure function that takes current state + action and returns new state.

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, action.payload];
    default:
      return state;
  }
};


🔹 6. What is an Action in Redux?

Answer:
An action is a plain JavaScript object that describes what happened.

{
  type: "ADD_TO_CART",
  payload: product
}


🔹 type → mandatory
🔹 payload → optional data



