
console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', () => {
// URL to fetch dog images
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

// Function to fetch images and add them to the DOM
function fetchDogImages() {
    fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
            const imageContainer = document.getElementById('image-container');
            data.message.forEach(imageUrl => {
                const imgElement = document.createElement('img');
                imgElement.src = imageUrl;
                imageContainer.appendChild(imgElement);
            });
        })
        .catch(error => {
            console.error('Error fetching images:', error);
        });
    }

    fetchDogImages();
});

//challenge 2: Fetch and Display Dog Breeds

document.addEventListener('DOMContentLoaded', () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";

    function fetchDogImages() {
        fetch(imgUrl)
            .then(response => response.json())
            .then(data => {
                const imageContainer = document.getElementById('dog-image-container');
                data.message.forEach(imageUrl => {
                    const imgElement = document.createElement('img');
                    imgElement.src = imageUrl;
                    imageContainer.appendChild(imgElement);
                });
            })
            .catch(error => {
                console.error('Error fetching images:', error);
            });
    }

    function fetchDogBreeds() {
        fetch(breedUrl)
            .then(response => response.json())
            .then(data => {
                const breedList = document.getElementById('dog-breeds');
                for (let breed in data.message) {
                    const li = document.createElement('li');
                    li.textContent = breed;
                    breedList.appendChild(li);
                }
            })
            .catch(error => {
                console.error('Error fetching breeds:', error);
            });
    }

    fetchDogImages();
    fetchDogBreeds();
});

//challenge 3: Change Font Color on Click
function fetchDogBreeds() {
    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            const breedList = document.getElementById('dog-breeds');
            for (let breed in data.message) {
                const li = document.createElement('li');
                li.textContent = breed;
                li.addEventListener('click', () => {
                    li.style.color = 'blue'; // Change to your desired color
                });
                breedList.appendChild(li);
            }
        })
        .catch(error => {
            console.error('Error fetching breeds:', error);
        });
}

//Challenge 4: Filter Breeds by Letter
document.addEventListener('DOMContentLoaded', () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    let allBreeds = [];

    function fetchDogImages() {
        fetch(imgUrl)
            .then(response => response.json())
            .then(data => {
                const imageContainer = document.getElementById('dog-image-container');
                data.message.forEach(imageUrl => {
                    const imgElement = document.createElement('img');
                    imgElement.src = imageUrl;
                    imageContainer.appendChild(imgElement);
                });
            })
            .catch(error => {
                console.error('Error fetching images:', error);
            });
    }

    function fetchDogBreeds() {
        fetch(breedUrl)
            .then(response => response.json())
            .then(data => {
                allBreeds = Object.keys(data.message);
                renderBreeds(allBreeds);
            })
            .catch(error => {
                console.error('Error fetching breeds:', error);
            });
    }

    function renderBreeds(breeds) {
        const breedList = document.getElementById('dog-breeds');
        breedList.innerHTML = '';
        breeds.forEach(breed => {
            const li = document.createElement('li');
            li.textContent = breed;
            li.addEventListener('click', () => {
                li.style.color = 'blue'; // Change to your desired color
            });
            breedList.appendChild(li);
        });
    }

    function filterBreeds(letter) {
        const filteredBreeds = allBreeds.filter(breed => breed.startsWith(letter));
        renderBreeds(filteredBreeds);
    }

    document.getElementById('breed-dropdown').addEventListener('change', (event) => {
        filterBreeds(event.target.value);
    });

    fetchDogImages();
    fetchDogBreeds();
});
