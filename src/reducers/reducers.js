import { combineReducers } from "redux";
import countriesReducer from "./countriesReducer";
import countryReducer from "./countryReducer";
import sentinelDateReducer from "./sentinelDateReducer";
import sentinelHubLayerReducer from "./sentinelHubLayerReducer";

const reducers = combineReducers({
    country: countryReducer,
    countries: countriesReducer,
    sentinelHubLayer: sentinelHubLayerReducer,
    sentinelDate: sentinelDateReducer,
});

export default reducers;
