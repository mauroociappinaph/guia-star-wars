import { useEffect, useState } from "react";

export default function Card() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

const fetchData = async () => {
  try {
    const url = "https://swapi.dev/api/people";
    const response = await fetch(url);
    if (!response.ok) throw new Error("Network response was not ok");
    const responseData = await response.json();
    setData(responseData);
  } catch (error) {
    console.error("An error occurred:", error);
  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Card</h1>
      <ul className="grid grid-cols-3" style={{ color: "white" }}>
        {data?.results.map((people) => (
          <li key={people.name}>{people.name}</li>
        ))}
      </ul>
    </div>
  );
}