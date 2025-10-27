Tour Destination Selector — React Tour Explorer App

A responsive and interactive React Tour Explorer that lets users browse, filter, and manage a list of tour destinations fetched from a remote API. Users can select specific destinations from a dropdown, view individual tours, remove tours they’re not interested in, and refresh the list when all tours are removed.

Features

Live Data Fetching: Retrieves tour destinations from a remote API (https://course-api.com/react-tours-project) using fetch() and useEffect.

Dynamic Filtering: Dropdown menu allows users to view all tours or a specific destination using controlled components.

Interactive UI: Each tour card includes a “Not Interested” button to remove it from the list.

State Management: Built with useState and useEffect for reactive UI updates.

Conditional Rendering: Displays loading and error messages, and a reset message when no tours remain.

Tech Stack

React (Vite)

JavaScript (ES6+)

HTML5 & CSS3

Fetch API

Components
Component	Description
App.jsx	Fetches tour data, manages state, and coordinates filtering logic.
Gallery.jsx	Displays filtered tours and handles conditional rendering.
TourCard.jsx	Shows tour details (name, image, info, price) with a “Not Interested” button.
DestinationSelector.jsx	Dropdown component that filters tours by destination using controlled input.

Project Structure
tour-destination-selector/
├── src/
│   ├── App.jsx
│   ├── Gallery.jsx
│   ├── TourCard.jsx
│   ├── DestinationSelector.jsx
│   ├── index.css
│   └── main.jsx
└── package.json

Key Concepts Demonstrated

useEffect for data fetching and lifecycle management

useState for reactive UI control

Controlled form components in React

Array filtering and mapping

Conditional rendering and user interaction

How to Run

Clone the repository:

git clone https://github.com/yourusername/tour-destination-selector.git


Install dependencies:

npm install


Start the development server:

npm run dev


Open your browser and visit:

http://localhost:5173
