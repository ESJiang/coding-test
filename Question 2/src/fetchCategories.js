async function fetchData() {
    try {
        const response = await axios.get("http://localhost:8080");
        const categories = response.data;
        console.log(categories);
    } catch (error) {
        console.error("Error fetching data", error.message);
    }
}
document.getElementById("fetchCategories").addEventListener("click", fetchData);
