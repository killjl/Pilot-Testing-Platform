document.addEventListener('DOMContentLoaded', function() {
    // 获取DOM元素
    const postForm = document.getElementById('postForm');
    const postsContainer = document.getElementById('postsContainer');
    
    // 存储发布的文章
    let posts = [];
    
    // 从本地存储加载文章
    if (localStorage.getItem('posts')) {
        posts = JSON.parse(localStorage.getItem('posts'));
        renderPosts();
    }
    
    // 表单提交事件
    postForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // 获取表单数据
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const content = document.getElementById('content').value;
        const category = document.getElementById('category').value;
        
        // 创建新文章对象
        const newPost = {
            id: Date.now(), // 使用时间戳作为唯一ID
            title,
            author,
            content,
            category,
            date: new Date().toLocaleString()
        };
        
        // 添加到文章数组
        posts.unshift(newPost); // 添加到开头，使最新文章显示在最上面
        
        // 保存到本地存储
        savePostsToLocalStorage();
        
        // 重新渲染文章列表
        renderPosts();
        
        // 重置表单
        postForm.reset();
        
        // 显示成功消息
        alert('文章发布成功！');
    });
    
    // 渲染文章列表
    function renderPosts() {
        // 清空容器
        postsContainer.innerHTML = '';
        
        if (posts.length === 0) {
            postsContainer.innerHTML = '<p class="no-posts">暂无发布内容</p>';
            return;
        }
        
        // 为每篇文章创建卡片
        posts.forEach(post => {
            const postCard = document.createElement('div');
            postCard.className = 'post-card';
            
            // 根据分类设置样式类
            const categoryClass = `category-${post.category}`;
            
            postCard.innerHTML = `
                <h3 class="post-title">${post.title}</h3>
                <div class="post-meta">
                    <span>作者: ${post.author}</span>
                    <span>发布时间: ${post.date}</span>
                </div>
                <p class="post-content">${post.content}</p>
                <span class="post-category ${categoryClass}">${getCategoryName(post.category)}</span>
                <button class="delete-btn" data-id="${post.id}">删除</button>
            `;
            
            postsContainer.appendChild(postCard);
        });
        
        // 添加删除按钮事件
        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const postId = parseInt(this.getAttribute('data-id'));
                deletePost(postId);
            });
        });
    }
    
    // 删除文章
    function deletePost(postId) {
        if (confirm('确定要删除这篇文章吗？')) {
            posts = posts.filter(post => post.id !== postId);
            savePostsToLocalStorage();
            renderPosts();
        }
    }
    
    // 保存文章到本地存储
    function savePostsToLocalStorage() {
        localStorage.setItem('posts', JSON.stringify(posts));
    }
    
    // 获取分类名称
    function getCategoryName(category) {
        const categories = {
            'general': '通用',
            'technology': '技术',
            'life': '生活',
            'education': '教育'
        };
        return categories[category] || '未知';
    }
});