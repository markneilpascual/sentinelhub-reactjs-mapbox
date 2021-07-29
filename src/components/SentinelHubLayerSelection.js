import { MenuItem } from "@material-ui/core";
import { FormControl, InputLabel, Select } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSentinelHubLayer } from "../actions/sentinelHubLayerActions";

const sentinelHubLayerList = [
    {
        name: "True color",
        ID: "TRUE_COLOR",
    },
    {
        name: "SWIR",
        ID: "SWIR",
    },

    { name: "SAVI (Soil Adjusted Vegetation Index)", ID: "SAVI" },
    { name: "RGB (8,6,4)", ID: "RGB_8_6_4" },
    { name: "RGB (8,5,4)", ID: "RGB_8_5_4" },
    { name: "RGB (8,11,4)", ID: "RGB_8_11_4" },
    { name: "RGB (8,11,12)", ID: "RGB_8_11_12" },
    { name: "RGB (4,3,1) - Bathymetric", ID: "RGB_4_3_1" },
    { name: "RGB (11,8,3)", ID: "RGB_11_8_3" },
    { name: "Red edge NDVI", ID: "RED_EDGE_NDVI" },
    {
        name: "RE-NDWI (Red Edge - Normalized Difference Water Index)",
        ID: "RE_NDWI",
    },
    {
        name: "PSRI-NIR (Plant Senescence Reflectance Index - Near Infra-red)",
        ID: "PSRI_NIR",
    },
    { name: "PSRI (Plant Senescence Reflectance Index)", ID: "PSRI" },
    { name: "NDWI (Normalized Difference Water Index)", ID: "NDWI" },
    {
        name: "NDVI-GREEN (Normalized Difference Vegetation Index - Green)",
        ID: "NDVI_GREEN_GRAY",
    },
    {
        name: "NDVI-GRAY (Normalized Difference Vegetation Index - Grayscale)",
        ID: "NDVI_GRAY",
    },
    { name: "NDVI (Normalized Difference Vegetation Index)", ID: "NDVI" },
    { name: "NBR-RAW (Normalized Burn Ratio)", ID: "NBR_RAW" },
    {
        name: "MSAVI2 (Second Modified Soil Adjusted Vegetation Index)",
        ID: "MSAVI2",
    },
    { name: "Moisture Index", ID: "MOISTURE_INDEX" },
    {
        name: "LAI-SAVI (Leaf Area Index - Soil Adjusted Vegetation Index)",
        ID: "LAI_SAVI",
    },
    { name: "GRVI1 (Green-red Vegetation Index)", ID: "GRVI1" },
    { name: "Geology", ID: "GEOLOGY" },
    { name: "False color (vegetation)", ID: "FALSE_COLOR" },
    { name: "False color (urban)", ID: "FALSE_COLOR_URBAN" },
    { name: "EVI2 (Enhanced Vegetation Index 2)", ID: "EVI2" },
    { name: "EVI (Enhanced Vegetation Index)", ID: "EVI" },
    { name: "CRI2 (CarotenoID: ' Reflectance Index 2)", ID: "CRI2" },
    { name: "CRI1 (CarotenoID: ' Reflectance Index 1)", ID: "CRI1" },
    { name: "CHL-RED-EDGE (Chlorophyll Red-Edge)", ID: "CHL_RED_EDGE" },
    { name: "Bathymetric", ID: "BATHYMETRIC" },
    { name: "BAI (Burn Area Index)", ID: "BAI" },
    { name: "B9 - Water vapour", ID: "B09" },
    { name: "B8A - Vegetation Red Edge (865 nm)", ID: "B8A" },
    { name: "B8 - Near infrared", ID: "B08" },
    { name: "B7 - Vegetation Red Edge (783 nm)", ID: "B07" },
    { name: "B5 - Vegetation Red Edge (705 nm)", ID: "B05" },
    { name: "B4 - Red", ID: "B04" },
    { name: "B3 - Green", ID: "B03" },
    { name: "B2 - Blue", ID: "B02" },
    { name: "B12 - SWIR (2190 nm)", ID: "B12" },
    { name: "B11 - SWIR (1610 nm)", ID: "B11" },
    { name: "B10 - SWIR - Cirrus", ID: "B10" },
    { name: "B1 - Coastal aerosol", ID: "B01" },
    { name: "Atmospheric penetration", ID: "ATMOSPHERIC_PENETRATION" },
    { name: "ARI2 (Anthocyanin Reflectance Index)", ID: "ARI2" },
    { name: "ARI1 (Anthocyanin Reflectance Index)", ID: "ARI1" },
    { name: "Agriculture", ID: "AGRICULTURE" },
    { name: "B6 - Vegetation Red Edge (740 nm)", ID: "B06" },
];

function SentinelHubLayerSelection() {
    const dispatch = useDispatch();
    const [selectedLayer, setSelectedLayer] = useState({});
    
    return (
        <div style={{marginTop:20}}>
            <FormControl fullWidth>
                <InputLabel id="sentinel-layer">Sentinel Hub Layer</InputLabel>
                <Select
                    labelId="sentinel-layer"
                    id="sentinel-layer"
                    value={selectedLayer ? selectedLayer : ""}
                    onChange={(e) => {
                        let selectedLayer = e.target.value;
                        setSelectedLayer(selectedLayer);
                        let sentinelHubLayer = sentinelHubLayerList.find( layer => layer.ID === selectedLayer);
                        dispatch(setSentinelHubLayer(sentinelHubLayer));
                    }}
                >
                    {sentinelHubLayerList.map((layer, index) => {
                        return (
                            <MenuItem
                                value={layer.ID ? layer.ID : ""}
                                key={index}
                            >
                                {layer.name}
                            </MenuItem>
                        );
                    })}
                </Select>
            </FormControl>
        </div>
    );
}

export default SentinelHubLayerSelection;
