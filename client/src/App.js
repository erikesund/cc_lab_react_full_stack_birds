import { useState, useEffect } from "react";

import './App.css';

import SightingsForm from "./SightingsForm";
import SightingsGrid from "./SightingsGrid";
import { getSightings } from "./SightingService";

function App() {

  const [birdSightings, setBirdSightings] = useState([]);
  const [editBird, setEditBird] = useState(null);

  useEffect(()=>{
    getSightings().then((allSightings)=>{
      setBirdSightings(allSightings);
    })
  }, []);

  const addSighting = (sighting) =>{
    const temp = birdSightings.map(s =>s);
    temp.push(sighting);
    setBirdSightings(temp);
  }

  const removeSighting = (id) => {
    const temp = birdSightings.map(s =>s);
    const indexToDel = temp.map(s => s._id).indexOf(id);
    console.log(indexToDel);

    temp.splice(indexToDel, 1);
    setBirdSightings(temp);
  }

  const editSighting = (id) => {
    const copyData = [...birdSightings];
    const birdToEdit = birdSightings.find(sighting => id === sighting.id);
    setEditBird(birdToEdit);
  }

  return (
    <>
      <SightingsForm addSighting={addSighting}/>
      {editBird ? <p>Edit Form</p> : null}
      {/* {editBird} ? <SightingsEditForm /> : null  */}
      <SightingsGrid sightings={birdSightings} removeSighting={removeSighting} editSighting={editSighting} />
    </>
  );
}

export default App;
