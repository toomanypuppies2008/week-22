export async function fetchData() {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character", {
      method: "GET",
    });
    const data = await response.json();
    const characters = data.results;
    return characters;
  } catch (error) {
    alert(error.name);
  }
}
