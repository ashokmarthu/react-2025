import { useCallback, useEffect, useRef, useState } from "react";
import { sortPlacesByDistance } from "./loc.js";
import Places from "./components/Places.jsx";
import { AVAILABLE_PLACES } from "./data.js";
import Modal from "./components/Modal.jsx";
import DeleteConfirmation from "./components/DeleteConfirmation.jsx";
import logoImg from "./assets/logo.png";

const storedIds =
  JSON.parse(JSON.stringify(localStorage.getItem("selectedIds"))) || [];
const selectedPlaces = AVAILABLE_PLACES.filter((place) =>
  storedIds.includes(place.id)
);
function App() {
  const selectedPlace = useRef();
  const [pickedPlaces, setPickedPlaces] = useState(selectedPlaces);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isModelOpen, setIsModelOpen] = useState(false);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const sortedPlaces = sortPlacesByDistance(
        AVAILABLE_PLACES,
        position.coords.latitude,
        position.coords.longitude
      );
      setAvailablePlaces(sortedPlaces);
    });
  }, []);

  function handleStartRemovePlace(id) {
    setIsModelOpen(true);
    selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
    setIsModelOpen(false);
  }

  function handleSelectPlace(id) {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      return [place, ...prevPickedPlaces];
    });
    const storedIds = JSON.parse(localStorage.getItem("selectedPlaces")) || [];
    if (storedIds.indexOf(id) === -1) {
      localStorage.setItem("selectedIds", JSON.stringify([id, ...storedIds]));
    }
  }

  const handleRemovePlace = useCallback(function handleRemovePlace() {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );
    const storedIds = JSON.parse(localStorage.getItem("selectedPlaces")) || [];
    localStorage.setItem(
      "selectedIds",
      JSON.stringify(storedIds.filter((id) => id !== selectedPlace.current))
    );
    setIsModelOpen(false);
  }, []);
  
  const handleCloseModal = () => {
    setIsModelOpen(false);
  };
  return (
    <>
      <Modal open={isModelOpen} onClose={handleCloseModal}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={"Select the places you would like to visit below."}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          fallbackText={"Sorting Places based on the user location"}
          places={availablePlaces}
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}

export default App;
