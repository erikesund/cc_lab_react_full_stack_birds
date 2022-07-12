import { deleteSighting, sightingEdit } from "./SightingService"

const SightingCard = ({sighting, removeSighting, editSighting}) => {

    console.log(sighting);
    const handleDelete = () => {
        deleteSighting(sighting._id).then(()=>{
            removeSighting(sighting._id);
        })
    }

    const handleEdit = () => {
        sightingEdit(sighting._id)
    }
    return (
        <>
            <h1>{sighting.species}</h1>
            <p>Location: {sighting.location}</p>
            <p>Date: {sighting.date}</p>
            <button onClick={handleDelete}> 🗑 </button>
            <button onClick={handleEdit}> 🔧 </button>
            <hr></hr>
        </>
    )
}

export default SightingCard;