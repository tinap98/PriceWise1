let mobiles = [];

async function loadLocalData() {
    try {
        console.log('Attempting to load local data...');
        const response = await fetch('/home/sisirak2023/pricewise/mobile_data.json');

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Data loaded successfully:', data);
        return data;
    } catch (error) {
        console.error('Error loading local data:', error);
        return [];
    }
}

function loadFeaturedMobiles() {
    console.log('Loading featured mobiles...');
    const featuredMobilesDiv = document.getElementById('featuredMobiles');
    if (!featuredMobilesDiv) {
        console.error('Featured mobiles div not found');
        return;
    }
    let featuredHTML = '';

    if (mobiles.length === 0) {
        console.error('No mobile data available');
        featuredMobilesDiv.innerHTML = '<p>No featured mobiles available</p>';
        return;
    }

    for (let i = 0; i < Math.min(3, mobiles.length); i++) {
        const mobile = mobiles[i];
        featuredHTML += `
            <div class="mobile-card">
                <img src="${mobile.image || 'placeholder.jpg'}" alt="${mobile.name}">
                <div class="mobile-card-content">
                    <h3>${mobile.name}</h3>
                    <p>Starting from: ${mobile.comparisons[0].price}</p>
                    <a href="${mobile.comparisons[0].link}" target="_blank">View Details</a>
                </div>
            </div>
        `;
    }

    featuredMobilesDiv.innerHTML = featuredHTML;
    console.log('Featured mobiles loaded');
}

function searchMobiles() {
    const searchQueryHome = document.getElementById('searchBar')?.value.toLowerCase() || '';
    const searchQuerySearchPage = document.getElementById('searchBarSearchPage')?.value.toLowerCase() || '';
    
    const searchQuery = searchQueryHome || searchQuerySearchPage; // Combine both search bar values

    console.log('Search query:', searchQuery);

    const filteredMobiles = mobiles.filter(mobile =>
        mobile.title.toLowerCase().includes(searchQuery)
    );

    console.log('Mobiles array:', mobiles);

    const tableBody = document.getElementById('tableBody');
    if (!tableBody) {
        console.error('Table body not found');
        return;
    }

    let tableHTML = '';
    if (filteredMobiles.length === 0) {
        tableHTML = '<tr><td colspan="4">No results found</td></tr>';
    } else {
        filteredMobiles.forEach(mobile => {
            tableHTML += `
                <tr>
                    <td>${mobile.title}</td>
                    <td>${mobile.price}</td>
                    <td>${mobile.rating}</td>
                    <td><a href="${mobile.link}" target="_blank">View</a></td>
                </tr>
            `;
        });
    }

    tableBody.innerHTML = tableHTML;
    console.log('Search results loaded');
}

document.addEventListener('DOMContentLoaded', async () => {
    console.log('Initializing app...');
    mobiles = await loadLocalData();
    if (mobiles.length > 0) {
        loadFeaturedMobiles();
        console.log('App initialized successfully');
    } else {
        console.error('No mobile data loaded');
        document.getElementById('featuredMobiles').innerHTML = '<p>Failed to load mobile data</p>';
    }

    const searchBar = document.getElementById('searchBar');
    const searchBarSearchPage = document.getElementById('searchBarSearchPage');
    if (searchBar || searchBarSearchPage) {
        searchBar?.addEventListener('input', searchMobiles);
        searchBarSearchPage?.addEventListener('input', searchMobiles);
        console.log('Search bar event listener(s) added');
    } else {
        console.error('Search bar not found');
    }
});