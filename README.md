# movie-ticket


MovieDetails Component:

* Uses useState and useEffect hooks from React.
* Imports Card, Button, Modal, and toast components from react-bootstrap library.
* Imports useLoaderData and useParams from react-router-dom.
* Manages state for showModal and addedMovies using useState.
* Retrieves movie data using useLoaderData and useParams.
* Defines handleStorage function to add movies to localStorage and update addedMovies state.
* Defines openModal and closeModal functions to toggle the visibility of the modal.
* Defines handleClearStorage function to remove movies from localStorage and update addedMovies state.
* Renders a Card component to display movie details with an overlay.
* Displays a "View Your List" Button that opens a modal to show added movies.
* The modal displays the added movies or a message if no movies are added.
* Includes buttons in the modal to clear all stored movies and close the modal.
Overall, the MovieDetails component handles movie details, storage management, and the display of added movies using a modal.
