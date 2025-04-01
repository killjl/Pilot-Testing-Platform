document.addEventListener('DOMContentLoaded', function() {
    
    
    // 搜索功能
    const searchInput = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');
    
    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase();
        const cards = document.querySelectorAll('.data-card');
        const rows = document.querySelectorAll('tbody tr');
        
        if (searchTerm === '') {
            cards.forEach(card => card.style.display = 'block');
            rows.forEach(row => row.style.display = '');
            return;
        }
        
        
        // 搜索表格视图
        rows.forEach(row => {
            const rowText = row.textContent.toLowerCase();
            row.style.display = rowText.includes(searchTerm) ? '' : 'none';
        });
    }
    
    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
});