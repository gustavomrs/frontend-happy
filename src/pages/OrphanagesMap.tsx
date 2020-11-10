import React from 'react'
import { Link } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'
import { MapContainer, TileLayer } from 'react-leaflet'

import mapMarkerImg from '../images/map_marker.svg'

import '../styles/pages/orphanages-map.css'
import 'leaflet/dist/leaflet.css'

function OrphanagesMap() {
  return (
    <div>
      <div id="page-map">
        <aside>
          <header>
            <img src={mapMarkerImg} alt="Happy"/>

            <h2>Choose an orphanage on the map</h2>
            <p>Many children are waiting for your visit :)</p>
          </header>

          <footer>
            <strong>Curitiba</strong>
            <span>Paraná</span>
          </footer>
        </aside>

        <MapContainer
          center={[-25.4217853,-49.2827601]}
          zoom={15}
          style={{ width: '100%', height: '100%' }}
        >
          {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/> */}
          <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/>
        </MapContainer>

        <Link to="" className="create-orphanage">
          <FiPlus size={32} color="#FFF" />
        </Link>
      </div>
    </div>
  )
}

export default OrphanagesMap
