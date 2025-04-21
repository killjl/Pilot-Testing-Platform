
document.addEventListener('DOMContentLoaded', function() {
    // 模拟数据 - 实际使用时替换为您的真实数据
    const dataset = [
        {
            id: 1,
            name: '生物医学工程及先进材料开发中试平台',
            com: '广东顺德工业设计研究院（广东顺德创新设计研究院）',
            industry: '医药健康、生物医药与健康、新材料、前沿新材料',
            town: '北滘镇'
        },
		{
            id: 2,
            name: '生物医学工程及先进材料开发中试平台',
            com: '广东顺德工业设计研究院（广东顺德创新设计研究院）',
            industry: '医药健康、生物医药与健康、新材料、前沿新材料',
            town: '陈村镇'
        },
        
        // 可以添加更多数据...
    ];

    // DOM元素
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const resultsContainer = document.getElementById('resultsContainer');
    const paginationContainer = document.getElementById('pagination');

    // 分页设置
    const itemsPerPage = 5;
    let currentPage = 1;
    let currentResults = [];

    // 初始化
    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') performSearch();
    });

    // 执行搜索
    function performSearch() {
        const searchTerm = searchInput.value.trim();

        // 过滤数据
        let results = dataset.filter(item => {
            if (!searchTerm) return true; // 如果搜索词为空，返回所有数据
            
            const fieldsToSearch = [
                String(item.name),
                String(item.com),
                String(item.industry),
                String(item.town)
            ];
            
            return fieldsToSearch.some(field => {
                let textf = field;
                let term = searchTerm;
				return textf.toLowerCase().includes(term.toLowerCase());
            });
        });


        currentResults = results;
        currentPage = 1;
        renderResults();
        renderPagination();
    }


    // 渲染结果
    function renderResults() {
        if (currentResults.length === 0) {
            resultsContainer.innerHTML = `
                <div class="no-results">
                    <p>没有找到匹配的结果</p>
                </div>
            `;
            return;
        }

        // 计算当前页的数据
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const pageResults = currentResults.slice(startIndex, endIndex);

    

        resultsContainer.innerHTML = '';
        
        pageResults.forEach(item => {
            const resultElement = document.createElement('div');
            resultElement.className = 'result-item';
            
            resultElement.innerHTML = `
                <h3>${item.name}</h3>
                <p><strong>承担单位:</strong> ${item.com}</p>
                <p><strong>所属行业/产业:</strong> ${item.industry} </p>
				<p><strong>所在镇街:</strong> ${item.town} </p>
                <button onclick="viewDetails(${item.id})" class="view-details">查看详情</button>
            `;
            
            resultsContainer.appendChild(resultElement);
        });
    }

    // 渲染分页
    function renderPagination() {
        const totalPages = Math.ceil(currentResults.length / itemsPerPage);
        
        if (totalPages <= 1) {
            paginationContainer.innerHTML = '';
            return;
        }

        let paginationHTML = '';
        
        // 上一页按钮
        paginationHTML += `
            <button ${currentPage === 1 ? 'disabled' : ''} 
                    onclick="changePage(${currentPage - 1})">
                上一页
            </button>
        `;
        
        // 页码按钮
        for (let i = 1; i <= totalPages; i++) {
            paginationHTML += `
                <button ${i === currentPage ? 'class="active"' : ''} 
                        onclick="changePage(${i})">
                    ${i}
                </button>
            `;
        }
        
        // 下一页按钮
        paginationHTML += `
            <button ${currentPage === totalPages ? 'disabled' : ''} 
                    onclick="changePage(${currentPage + 1})">
                下一页
            </button>
        `;
        
        paginationContainer.innerHTML = paginationHTML;
    }

    // 转义正则表达式特殊字符
    function escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    // 全局函数 - 改变页码
    window.changePage = function(page) {
        currentPage = page;
        renderResults();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // 全局函数 - 查看详情
    window.viewDetails = function(id) {
        const item = dataset.find(item => item.id === id);
        if (item) {
            alert(`详细信息:\n\n名称: ${item.name}\n描述: ${item.com}\n出版日期: ${item.industry}\n评分: ${item.town}`);
            // 实际应用中可以用模态框代替alert
        }
    };

});