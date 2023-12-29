import { useEffect, useState } from "react";
import { getAllCharacters } from "../utils/api";

export default function Card() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const responseData = await getAllCharacters();
        setData(responseData);
      } catch (error) {
        // Handle error if needed
      } finally {
        setLoading(false);
      }
    };

    fetchDataFromApi();
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