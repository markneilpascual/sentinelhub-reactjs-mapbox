const sentinelHubLayerReducer = (state = "", { type, payload }) => {
  switch (type) {
    case "SET_SENTINELHUB_LAYER":
      return payload;
      break;

    default:
      return state;
      break;
  }
};

export default sentinelHubLayerReducer;
