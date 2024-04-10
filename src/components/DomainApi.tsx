import React, { useEffect, useState } from 'react';

interface Props {
  url: string;
}

interface Domain {
  domain: string;
}

const DomainApi = ({ url }: Props) => {
  // We create the useState
  const [domains, setDomains] = useState<Domain[]>([]);

  // Define the function that we will use as the first parameter of the use effect to retrieve the data and use our useState setter to upload that data
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const jsonData = await response.json();
      setDomains(jsonData);
    } catch (error) {
      console.error('Error found while trying to fetch data: ', error);
    }
  };

  // Define the useEffect

  useEffect(() => {
    fetchData();
  }, [url]);
  return (
    <>
      <ul>
        {domains.map((domain) => (
          <li key={domain.domain}>{domain.domain}</li>
        ))}
      </ul>
    </>
  );
};

export default DomainApi;
