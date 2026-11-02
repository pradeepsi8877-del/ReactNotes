
import React, { useEffect, useState} from 'react'
function FetchSearch() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then(setData);
  }, []);

  return (
    <>
      <input onChange={(e) => setSearch(e.target.value)} placeholder="Search user..." />

      {data
        .filter((u) => u.name.toLowerCase().includes(search.toLowerCase()))
        .map((u) => (
          <p key={u.id}>{u.name}</p>
        ))}
    </>
  );
}
export default FetchSearch