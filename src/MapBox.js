import React, { useRef, useState } from "react";
import { useEffect } from "react";

import ReactMapboxGl, { Layer, Source } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useSelector } from "react-redux";

import mapboxgl from "mapbox-gl";
import axios from "axios";
import { getBounds } from "./functions";

// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;
const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;
const Map = new ReactMapboxGl({
    accessToken: MAPBOX_TOKEN,
});
const sentinelHubURL = `${process.env.REACT_APP_SENTINELHUB_URL}${process.env.REACT_APP_SENTINELHUB_INSTANCE_KEY}?REQUEST=GetMap&SERVICE=WMS&maxcc=20&width=320&height=320&bbox={bbox-epsg-3857}&srs=EPSG:3857&layers=`

function MapBox() {
    const [selectedCountry, setSelectedCountry] = useState({});
    const [viewport, setViewport] = useState({
        style: "mapbox://styles/mapbox/dark-v10",
        containerStyle: {
            height: "100vh",
            width: "100vw",
        },
        zoom: [1],
        fitBoundsOptions: {
            offset: [0, 0],
        },
    });
    const country = useSelector((state) => state.country);
    const sentinelHubLayer = useSelector(state => state.sentinelHubLayer)
    const sentinelDateRange = useSelector((state) => state.sentinelDate);

    const setTime = (date) => {
        if (date.startDate && date.endDate)
            return `&TIME=${date.startDate}/${date.endDate}`;

        return "";
    };

    useEffect(() => {
        if (selectedCountry != country) {
            setSelectedCountry(country);
            setViewport({
                ...viewport,
                fitBounds: country.geometry
                    ? getBounds(country.geometry.coordinates)
                    : null,
            });
        }

        return () => {
            
        };
    }, [country, sentinelHubLayer, sentinelDateRange]);

    return (
        <div>
            <Map {...viewport}>
                <Source
                    id="sentinel-data"
                    tileJsonSource={{
                        type: "raster",
                        tiles: [`${sentinelHubURL}${sentinelHubLayer.ID}${setTime(sentinelDateRange)}`],
                        tileSize: 512,
                    }}
                    key='sentinel-data'
                />
                <Layer
                    id='sentinel-layer'
                    type="raster"
                    sourceId='sentinel-data'
                    paint={{ "raster-opacity": 0.5 }}
                    beforeId="geojson-lines"
                    key='sentinel-layer'
                />
                <Source
                    id="geojson-layer"
                    type="geojson"
                    geoJsonSource={{ type: "geojson", data: country }}
                />
                <Layer
                    id="geojson-lines"
                    type="line"
                    paint={{
                        "line-color": "#fff",
                        "line-width": 3,
                    }}
                    sourceId="geojson-layer"
                />
            </Map>
        </div>
    );
}

export default MapBox;
