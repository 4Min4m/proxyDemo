import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/data')
      .then((res) => res.json())
      .then((data) => setData(data.message))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Vite Proxy Demo</h1>
      <p>Data from backend: {data || 'Loading...'}</p>
    </div>
  );
}

export default App;
