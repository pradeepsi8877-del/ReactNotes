import React, { useState } from 'react';

// Child A Component
function ChildA({ name, onChangeName }) {
  return (
    <div>
      <h2>Child A: {name}</h2>

      <button onClick={onChangeName}>
        Change Name
      </button>
    </div>
  );
}

// Child B Component
function ChildB({ name }) {
  return <h2>Child B: {name}</h2>;
}

// Parent Component
function LiftingStateUp() {

  const [name, setName] = useState("Rahul");

  return (
    <div>
      <h1>Lifting State Up Example</h1>

      <ChildA
        name={name}
        onChangeName={() => setName("Aman")}
      />

      <ChildB name={name} />
    </div>
  );
}

export default LiftingStateUp;