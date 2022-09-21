export const deleteSong = (song, event) => {
  const songBody = document.querySelector(".song-body");
  const listItem = document.getElementById(event.target.id).parentElement
    .parentElement;
  songBody.removeChild(listItem);
  return {
    type: "DELETESONG",
    data: song,
  };
};
