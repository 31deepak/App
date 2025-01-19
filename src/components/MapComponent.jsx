import React, { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

const MapComponent = ({ latitude, longitude }) => {
  const [viewport, setViewport] = React.useState({
    latitude: latitude || 37.7749,
    longitude: longitude || -122.4194,
    zoom: 10,
    width: '100%',
    height: '400px',
  });

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
      onViewportChange={(newViewport) => setViewport(newViewport)}
    >
      <Marker latitude={latitude} longitude={longitude}>
        <div className="marker"></div>
      </Marker>
    </ReactMapGL>
  );
};

export default MapComponent;

