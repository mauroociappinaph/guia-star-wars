import { useSelector } from "react-redux";
import Card from "./Card";

export default function Cards() {
  const data = useSelector((state) => state.data);

  return (
    <div className="bg-gray-200 p-4">
      <h1 className="text-2xl font-bold mb-4">Component Cards</h1>
      <div className="grid grid-cols-3 gap-4">
        {data.map((person) => (
          <Card key={person.name} data={person} />
        ))}
      </div>
    </div>
  );
}