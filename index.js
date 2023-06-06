fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('dataContainer');
    
    // Process the JSON data
    data.forEach(item => {
      const itemElement = document.createElement('p');
      itemElement.textContent = item.name;
      container.appendChild(itemElement);
    });
  })
  .catch(error => {
    // Handle any errors
    console.log('Error:', error);
  });
