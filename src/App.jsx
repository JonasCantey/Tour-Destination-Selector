//Task 1 - Setup root component with state and props structure

//Importing tools from React - useState to manage values
import React, { useState, useEffect } from 'react';

//Importing the Gallery component to display the list of tours
import Gallery from './components/Gallery';
import DestinationSelector from './components/DestinationSelector';
//Importing the CSS file for styling the app
import './style.css';
const url = 'https://cors-anywhere.herokuapp.com/https://course-api.com/react-tours-project';

//This is the main component of the app
function App() {
  //This state variable stores the list of tours (starts as an empty array)
  const [tours, setTours] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState('All');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Fetch tours on load
  const fetchTours = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      if (!response.ok) throw new Error("Failed to fetch tours");
      const data = await response.json();
      setTours(data);
      setError(false);
    } catch (err) {
      console.error("Fetch error:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  // Remove tour by ID
  const removeTour = (id) => {
    setTours((prev) => prev.filter((tour) => tour.id !== id));
  };

  // Get list of unique destination names
  const uniqueDestinations = ['All', ...new Set(tours.map((tour) => tour.name))];

  return (
    <main>
      <h1>Tour Destination Selector</h1>

      {/* Dropdown for destinations */}
      <DestinationSelector
        options={uniqueDestinations}
        selected={selectedDestination}
        onSelect={setSelectedDestination}
      />

      {/* Tour cards */}
      <Gallery
        tours={tours}
        setTours={setTours}
        onRemove={removeTour}
        selectedDestination={selectedDestination}
        loading={loading}
        error={error}
        onRefresh={fetchTours}
      />
    </main>
  );
}

//Exporting the main App component as the default export
export default App;
