import React, { useEffect, useState } from 'react';

const Count = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    fetch('http://localhost:5000/api/stats')
      .then(response => response.json())
      .then(data => setVisitorCount(data.visitors))
      .catch(error => console.error('Error fetching stats:', error));
  }, []);

  return (
    <div>
      <p>Visitors: {visitorCount}</p>
    </div>
  );
};

export default Count;