document.addEventListener('DOMContentLoaded', () => {
    console.log('%c HI', 'color: firebrick'); 
  
    // Challenge 1: Fetch and display dog images
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const imagesContainer = document.getElementById('dog-image-container'); 
  
    fetch(imgUrl)
      .then(response => response.json())
      .then(data => {
        data.message.forEach(imgSrc => {
          const imgElement = document.createElement('img');
          imgElement.src = imgSrc;
          imgElement.alt = "A cute dog"; 
          imagesContainer.appendChild(imgElement);
        });
      })
      .catch(error => console.error('Error fetching images:', error));
  
    // Challenge 2: Fetch and display dog breeds
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const breedsList = document.getElementById('dog-breeds'); 
  
    fetch(breedUrl)
      .then(response => response.json())
      .then(data => {
        const breeds = Object.keys(data.message);
        breeds.forEach(breed => {
          const li = document.createElement('li');
          li.textContent = breed;
          breedsList.appendChild(li);
        });
      })
      .catch(error => console.error('Error fetching breeds:', error));
  
    // Challenge 3: Change font color on click
    breedsList.addEventListener('click', (event) => {
      if (event.target.tagName === 'LI') {
        event.target.style.color = 'blue'; 
      }
    });
  
    // Challenge 4: Implement filtering by breed
    const filterSelect = document.getElementById('breed-dropdown'); 
  
    filterSelect.addEventListener('change', (event) => {
      const selectedLetter = event.target.value;
      const allBreeds = breedsList.children;
  
      for (let i = 0; i < allBreeds.length; i++) {
        const breed = allBreeds[i].textContent;
        if (breed.startsWith(selectedLetter)) {
          allBreeds[i].style.display = 'list-item'; 
        } else {
          allBreeds[i].style.display = 'none'; 
        }
      }
    });
  });
  