export async function getAllCharacters() {
    try {
        const apiUrl = "https://swapi.dev/api/people";
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error("An error occurred:", error);
        throw error;
    }
}
