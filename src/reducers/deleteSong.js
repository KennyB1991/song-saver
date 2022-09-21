const deleteSongReducer = (state, action) => {
  switch (action.type) {
    case "DELETESONG":
      return state;
    default:
      return 0;
  }
};

export default deleteSongReducer;
