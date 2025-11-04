document.addEventListener('DOMContentLoaded', function() {
    // Get the container where cards will be displayed
    const cardContainer = document.querySelector('.card-grid.card-wrap');
    
    // Clear any existing cards
    cardContainer.innerHTML = '';
    
    // Filter data to only include wineries (IDs 1-10 based on data.js)
    const wineries = data.filter(item => item.id >= 1 && item.id <= 10);
    
    // Create and append cards for each winery
    wineries.forEach(winery => {
        const card = document.createElement('div');
        card.className = 'card';
        
        card.innerHTML = `
            <div class="image-frame">
                <img src="${winery.image || 'images/placeholder.jpg'}" alt="${winery.name}">
            </div>
            <div class="body">
                <h4>${winery.name}</h4>
                <p>${winery.description}</p>
                <div class="info">
                    <p><i class="far fa-map-marker-alt"></i> ${winery.address}</p>
                    <p><i class="far fa-phone"></i> ${winery.phone}</p>
                </div>
                <a href="${winery.website}" target="_blank"><button class="empty">Visit Website</button></a>
            </div>
        `;
        
        cardContainer.appendChild(card);
    });
});