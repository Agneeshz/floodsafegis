import React, { useState, useEffect } from "react";
import styles from "@/styles/dashboard.module.css";
import axios from 'axios';
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const ShelterListing = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [shelters, setShelters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://hydro-predict.onrender.com/api/shelters/'); // Replace with your API endpoint
        setShelters(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  const handleDelete = () => {
    // Add your delete logic here
    console.log('Item deleted');
  };

  return (
    <div className={styles.shelterListing}>
      <div className={styles.searchinputcontainer}>
        <input
          type="text"
          placeholder="🔍 Search past listings..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div>  
        <div className={styles.gridContainer}>
        <div>Location</div>
        <div>Latitude</div>
        <div>Longitude</div>  
        <div>Description</div>
        <div></div>
        </div>
        <div>
        {shelters.map((shelter,idx) => (
          <div key={idx} className={styles.contentGrid}>
          <div>{shelter.name}</div> 
          <div>{parseFloat(shelter.lat).toFixed(4)}</div>
          <div>{parseFloat(shelter.lng).toFixed(4)}</div>  
          <div>read more</div>
          <div style={{display:"flex",alignItems:"center",}}>          <button className={styles.button} onClick={() => handleEditClick(shelter.id)}>Edit</button>
            {/* <p>Identifier: {shelter.identifier.username}</p> */}
            <button className={styles.trashCan} onClick={handleDelete}>
            <FontAwesomeIcon icon={faTrashCan} />
            </button></div>

          </div>
        ))}
        </div>
        </div>  
    </div>
  );
};

export default ShelterListing;
