//Task 2 - Fetch and render tour list with useEffect and state

//Importing tools from React: useState to manage values, useEffect to run code when the component loads
import React, { useEffect, useState } from 'react';

//Importing the TourCard component, which is used to display each tour
import TourCard from './TourCard';

//The URL to get the tour data from the API (uses a proxy to avoid issues with permissions)
const url = 'https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project';

//The Gallery component is responsible for fetching and displaying all the tours
const Gallery = ({ tours, setTours, onRemove, selectedDestination, loading, error, onRefresh }) => {
    // Filter tours by selected destination
    const filteredTours =
    selectedDestination === "All"
      ? tours
      : tours.filter((tour) => tour.name === selectedDestination);

  //If the data is still loading, show "Loading..."
  if (loading) {
    return <h2>Loading...</h2>;
  }

  //If there was an error while fetching the data, show an error message
  if (error) {
    return <h2>Something went wrong.</h2>;
  }
  

  //If there are no tours left, show a message and a button to refresh the tours
  if (filteredTours.length === 0) {
    return (
      <div className="no-tours">
        <h2>No tours left</h2>
        <button onClick={onRefresh}>
          Refresh
        </button>
      </div>
    );
  }

  //Display all the tours by creating a TourCard for each tour
  return (
    <section className="gallery">
      {filteredTours.map((tour) => (
        <TourCard
          //A unique key to help React keep track of each tour
          key={tour.id}

          //Pass all the tour details as props to the TourCard component
          {...tour}

          //Pass the function to remove a tour when the user clicks "Not Interested"
          onRemove={onRemove}
        />
      ))}
    </section>
  );
};

//Exporting the Gallery component so it can be used in other files like App.jsx
export default Gallery;
