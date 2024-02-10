import React from 'react';

const VehicleInfo = ({ data }) => {
  return (
    <div className=''>
      <h2>Vehicle Details</h2>
      <img src={data.busImage} alt="Bus" />
      <p>Plate Number: {data.plateNumber}</p>
      <p>Manufacturer: {data.manufacturer}</p>
      <p>Model: {data.model}</p>
      <p>Year: {data.year}</p>
      <p>Capacity: {data.capacity}</p>
      <p>Destination: {data.destination}</p>
      <p>Distance: {data.distance}</p>
      <p>Duration: {data.duration}</p>
      <p>Price: {data.price}</p>
      <p>Ratings: {data.ratings}</p>
      <p>Status: {data.busStatus}</p>
      <p>Created At: {new Date(data.createdAt).toLocaleString()}</p>
      <p>Updated At: {new Date(data.updatedAt).toLocaleString()}</p>
    </div>
  );
};

export default VehicleInfo;
