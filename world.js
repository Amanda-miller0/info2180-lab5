window.onload = () => {
    const lookupBtn = document.querySelector("#lookup");
    const lookupCitiesBtn = document.querySelector("#lookup-cities");  // Get the new button for cities
    const resultDiv = document.querySelector("#result");

    // Lookup button for countries
    lookupBtn.addEventListener("click", () => {
        const query = document.querySelector("#country").value.trim();
        if (query === "") {
            resultDiv.innerHTML = "<p>Please enter a country name.</p>";
            return;
        }
        
        // Fetch country data
        fetchData(query, "country");
    });

    // Lookup button for cities
    lookupCitiesBtn.addEventListener("click", () => {
        const query = document.querySelector("#country").value.trim();
        if (query === "") {
            resultDiv.innerHTML = "<p>Please enter a country name.</p>";
            return;
        }

        // Fetch city data
        fetchData(query, "cities");
    });

    // Fetch function to handle both country and city lookups
    function fetchData(query, lookupType) {
        fetch(`world.php?country=${query}&lookup=${lookupType}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.text();
            })
            .then(data => {
                resultDiv.innerHTML = data;
            })
            .catch(error => {
                console.error("Fetch error:", error);
                resultDiv.innerHTML = "<p>Error fetching data.</p>";
            });
    }
};
