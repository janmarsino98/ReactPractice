import React, { useEffect, useState } from 'react';

interface CatFact {
  _id: string;
  text: string;
}

const CatFactsComponent = () => {
  // State to store the cat facts
  const [facts, setFacts] = useState<CatFact[]>([]);

  // Function to fetch data from the API
  const fetchData = async () => {
    try {
      const response = await fetch('https://cat-fact.herokuapp.com/facts');
      const jsonData = await response.json();
      console.log(jsonData);
      // Assuming the API returns an array directly, otherwise you might need to adjust based on the actual structure
      setFacts(jsonData);
    } catch (error) {
      console.error('Error fetching the data: ', error);
    }
  };

  // Use useEffect to call fetchData on component mount
  useEffect(() => {
    fetchData();
  }, []); // The empty array means this effect runs once after the initial render

  return (
    <div>
      <h1>Cat Facts</h1>
      <ul>
        {facts.map((fact) => (
          <li key={fact._id}>{fact.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default CatFactsComponent;
