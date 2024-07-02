import { useState, useEffect } from "react";

const Users = () => {
  const [data, setData] = useState([]);
  const [conmode, setMode] = useState("Online");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "https://jsonplaceholder.typicode.com/users";
        const res = await fetch(url);

        // Check if the response is OK (status in the range 200-299)
        if (res.ok) {
          const result = await res.json();
          setData(result);
        } else {
          console.log("Promise resolved but HTTP status failed");
        }
      } catch (error) {
        setMode("OFFLINE");
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <table>
      <thead>
        <tr>
          <th>You are in {conmode} mode</th>
        </tr>
        <tr>
          <th>#</th>
          <th>User Name</th>
          <th>Email</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      <tbody>
        {data.length > 0 &&
          data.map((item, indes) => {
            return (
              <tr key={indes}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default Users;
