
document.addEventListener('DOMContentLoaded', function() {
    // 模拟数据 - 实际使用时替换为您的真实数据
    const dataset = [
        {
            id: 1,
            name: '生物医学工程及先进材料开发中试平台',
            com: '广东顺德工业设计研究院（广东顺德创新设计研究院）',
            industry: '医药健康、生物医药与健康、新材料、前沿新材料',
            town: '北滘镇',
			device: '微滴式数字PCR系统MicroDrop',
			address: '广东省佛山市顺德区北滘镇广东工业设计城内',
			mnum: '1500',
			hnum: '14',
			human: '陈晓玲',
			phone: '0757-223998313',
			inform:'科技成果转化概念验证中心平台已建成总建筑面积约20,000平方米大楼，统筹配置了新能源、新材料、生物医药等领域的配套实验室6,000平方米，设备原值超2千万元，另配备了能满足试制生产、测试、加工要求的专用型中试实验室、通用性中试测试实验室以及机械加工中心，以及人才团队100余人。将围绕核心技术和高价值技术成果提供的概念验证服务打造成行业内概念验证中心标杆，着力破解科技成果转移转化难题。为全国90余所高校的科技成果转化提供概念验证服务，打造成为加速创新链与产业链融合的创新高地。',
			sevice:'为数字PCR、体外快速诊断及配套试剂、离体肝脏灌注系统设备、离体肺脏灌注系统设备、便携式ECMO等医疗器械进行中试验证及国产化开发应企业在佛山落地转化。体外快速诊断及配套试剂已孵化成出高企。离体肝脏灌注系统设备、离体肺脏灌注系统设备已作为科研机在国内相关三甲医院投入应用，并获得了德国红点奖以及iF设计奖。便携式ECMO已作为科研机定型，并实现了85%以上的国产化（其中大部分核心零部件均已实现低成本高质量国产化），目前正在探索下一步融资。<p>提供的中试服务包括但不限于医疗健康（耗材生产组装）工艺：</p><p>1.整体工艺：设计图/方案--原始数据及方案分析处理（转化成加工数据及方案）--原材料准备--零件材料制备-组装-检测。</p><p>2.套包不需要涂覆(套包外壳)工艺: 拆包->清洗->组装->封装->灭菌。</p><p>3.套包不需要清洗(外购沽净管路)工艺：拆包->涂覆->组装->封装->灭菌。</p><p>4.套包全工序(自制泵头及管路)工艺：拆包->洗->覆->组->封装->灭菌。</p>',
			sevcon:'1.在医疗器械开发领域，可提供概念验证服务，进行早期成果的可行性验证、应用场景、工艺改进、样品试制、临床应用、产品示范等。<p>2.在工业材料、医用材料和新能源材料等先进材料开发和测试领域，可提供概念验证服务。</p><p>3.通用机加和测试领域，可提供样品机加工、物质与成份测试、电子电路测试、材料性能测试、专业消毒等服务。</p><p>4.概念验证服务。通过配置人才团队、空间场地等资源，可提供仪器设备开发、自动化产线设计改造、人工智能、机械与软件设计、工业设计、试剂开发等技术服务。</p><p>5.人才培养，可为合作企业、单位提供研究生联合培养合作服务。 </p><p>6.研发支持与加工咨询，发挥科研平台和研发人员优势，解决客户开发、加工过程中的实际问题。</p>',
			pht:'<img class="fixed-ratio-img" src="gongyanyuan/p1.webp"  alt="现场图片" loading="lazy"><br><img class="fixed-ratio-img" src="gongyanyuan/p2.webp"  alt="现场图片" loading="lazy">'
		},
		
        
        // 可以添加更多数据...
    ];

    // DOM元素
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const resultsContainer = document.getElementById('resultsContainer');
    const paginationContainer = document.getElementById('pagination');
	const cardall = document.getElementById('allsearch');
	const cardzs = document.getElementById('zssearch');
	const cardgn = document.getElementById('gnsearch');
	const seeall = document.getElementById('seeall');
	const seezs = document.getElementById('seezs');
	const seegn = document.getElementById('seegn');
	const areagroup = document.getElementById('areasearch');
	const indusgroup = document.getElementById('indussearch');
	

    // 分页设置
    const itemsPerPage = 5;
    let currentPage = 1;
    let currentResults = [];
	let searchTerm = ""; 

    // 初始化
	cardall.addEventListener('click', allsearch);
	seeall.addEventListener('click', allsearch);
	cardzs.addEventListener('click', zssearch);
	seezs.addEventListener('click', zssearch);
	seegn.addEventListener('click', gnsearch);
	areagroup.addEventListener('click', areasearch);
	indusgroup.addEventListener('click', indussearch);
	
    searchButton.addEventListener('click', clicksearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') clicksearch();
    });
	
	
	
	function clicksearch(){
		searchTerm = searchInput.value.trim();
		performSearch();
	}
	
	function areasearch(){
		resultsContainer.innerHTML = `
			<section class="data-section">
				<div class="section-header">
					<h2>镇街列表</h2>
				</div>
				<div class="stats-grid">
					<div class="stat-card" role="button"  id ="dasearch" aria-pressed="false">
						<div class="stat-info">
							<h3>大良街道</h3>
							<p>10</p>
						</div>
					</div>
					<div class="stat-card" role="button"  id ="rongsearch" aria-pressed="false">
						<div class="stat-info">
							<h3>容桂街道</h3>
							<p>3</p>
						</div>
					</div>    
					<div class="stat-card" role="button"  id ="lunsearch" aria-pressed="false">
						<div class="stat-info">
							<h3>伦教街道</h3>
							<p>0</p>
						</div>
					</div>    
					<div class="stat-card" role="button"  id ="leliusearch" aria-pressed="false">
						<div class="stat-info">
							<h3>勒流街道</h3>
							<p>1</p>
						</div>
					</div>    
					<div class="stat-card" role="button"  id ="chensearch" aria-pressed="false">
						<div class="stat-info">
							<h3>陈村镇</h3>
							<p>5</p>
						</div>
					</div>    
					<div class="stat-card" role="button"  id ="beisearch" aria-pressed="false">
						<div class="stat-info">
							<h3>北滘镇</h3>
							<p>6</p>
						</div>
					</div>    
					<div class="stat-card" role="button"  id ="lecongsearch" aria-pressed="false">
						<div class="stat-info">
							<h3>乐从镇</h3>
							<p>3</p>
						</div>
					</div>    
					<div class="stat-card" role="button"  id ="longsearch" aria-pressed="false">
						<div class="stat-info">
							<h3>龙江镇</h3>
							<p>0</p>
						</div>
					</div>    
					<div class="stat-card" role="button"  id ="xinsearch" aria-pressed="false">
						<div class="stat-info">
							<h3>杏坛镇</h3>
							<p>0</p>
						</div>
					</div>    
					<div class="stat-card" role="button"  id ="junsearch" aria-pressed="false">
						<div class="stat-info">
							<h3>均安镇</h3>
							<p>0</p>
						</div>
					</div>    
						
				</div>
			</section>
		`
	}
	
	function indussearch(){
		resultsContainer.innerHTML = `
			<section class="data-section">
				<div class="section-header">
					<h2>行业/产业列表</h2>
				</div>
				<div class="stats-grid">
					<div class="stat-card" role="button"  id ="biosearch" aria-pressed="false">
						<div class="stat-info">
							<h3>生物医药</h3>
							<p>X</p>
						</div>
					</div>
					<div class="stat-card" role="button"  id ="housesearch" aria-pressed="false">
						<div class="stat-info">
							<h3>家电</h3>
							<p>X</p>
						</div>
					</div> 
				</div>
			</section>					
		`
	}
	
	function allsearch(){
		const pressed = this.getAttribute('aria-pressed') === 'true';
		this.setAttribute('aria-pressed', String(!pressed));
		searchTerm = '';
		performSearch();
	}
	
	function zssearch(){
		const pressed = this.getAttribute('aria-pressed') === 'true';
		this.setAttribute('aria-pressed', String(!pressed));
		searchTerm = '中试';
		performSearch();
	}
	
	function gnsearch(){
		const pressed = this.getAttribute('aria-pressed') === 'true';
		this.setAttribute('aria-pressed', String(!pressed));
		searchTerm = '概念验证';
		performSearch();
	}
	
	
    // 执行搜索
    function performSearch() {
        
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
					<div class="data-card">
                        <div class="card-header">
                            <h3>${item.name}</h3>
                        </div>
                        <div class="card-body">
                            <div class="card-row">
                                承担单位：${item.com}
                            </div>
                            <div class="card-row">
                                所属行业/产业：${item.industry}
                            </div>
							<div class="card-row">
                                所在镇街：${item.town}
                            </div>
							<button onclick="viewDetails(${item.id})" class="view-details">查看详情</button>
                        </div>
						
                    </div>
            `;
            resultsContainer.appendChild(resultElement);
        });
    }

    // 渲染分页
    function renderPagination() {
        const totalPages = Math.ceil(currentResults.length / itemsPerPage);
        
        if (totalPages < 1) {
            paginationContainer.innerHTML = '';
            return;
        }

        let paginationHTML = '';
        
        // 上一页按钮
        paginationHTML += `
            <button class="page-btn" ${currentPage === 1 ? 'disabled' : ''} 
                    onclick="changePage(${currentPage - 1})">
                上一页
            </button>
        `;
        
        // 页码按钮
        for (let i = 1; i <= totalPages; i++) {
            paginationHTML += `
                <button class="page-btn" ${i === currentPage ? 'class="active"' : ''} 
                        onclick="changePage(${i})">
                    ${i}
                </button>
            `;
        }
        
        // 下一页按钮
        paginationHTML += `
            <button class="page-btn" ${currentPage === totalPages ? 'disabled' : ''} 
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
            resultsContainer.innerHTML = `
                
            <section class="data-section">
                <div class="section-header">
                    <h2>平台详情</h2>
                </div>
                
                
                    <!-- 表格视图 -->
                    <div class="responsive-table">
                        <table>
                            <tbody>
                                <tr>
									<th class="" >平台名称</th>
									<td class="name">${item.name}</td>
									<th class="" >承担单位</th>
									<td class="com">${item.com}</td>
								</tr>
							</tbody>
                            <tbody>
								<tr>
									<th class="" >所属行业/产业</th>
									<td class="industry">${item.industry}</td>
									<th class="" >所在镇街</th>
									<td class="town">${item.town}</td>
								</tr>
							</tbody>
							<tbody>
								<tr>
									<th class="" >可共享仪器设备</th>
									<td class="device">${item.device}</td>
									<th class="" >详细地址</th>
									<td class="address">${item.address}</td></tr>
							</tbody>
							<tbody>
								<tr>
									<th class="" >总投资（万元）</th>
									<td class="mnum">${item.mnum}</td>
									<th class="" >人员</th>
									<td class="hnum">${item.hnum}</td>
								</tr>
							</tbody>
							<tbody>
								<tr>
									<th class="" >联系人</th>
									<td class="human">${item.human}</td>
									<th class="" >联系电话</th>
									<td class="phone">${item.phone}</td>
								</tr>
							</tbody>   
                        </table>
                    </div>
                
			</section>
			
				<section class="data-section">
					<div class="section-header">
						<h2>平台基本情况</h2>
					</div>
					<div class="bordered-text1">
						<p>${item.inform}</p> 
					</div> 
					<button class="toggle-btn1" >点击展开/收起</button>
					
					<div class="section-header">
						<h2>平台对外开放服务情况</h2>
					</div>
					<div class="bordered-text2">
						<p>${item.sevice}</p>	
					</div>
					<button class="toggle-btn2" >点击展开/收起</button>
					
					<div class="section-header">
						<h2>平台对外提供服务内容</h2>
					</div>
					<div class="bordered-text3">
						<p> 
							${item.sevcon}
						</p>
					</div>
					<button class="toggle-btn3" >点击展开/收起</button>
					
					<div class="section-header">
						<h2>平台现场照片</h2>
					</div>
					<div> ${item.pht}</div>
					
				</section>
            `;
			
			paginationContainer.innerHTML = '';
        }
    };

		// 点击容器内任何元素都会触发展开
		resultsContainer.addEventListener('click', e => {
		  // 事件目标元素
		  const btn1 = e.target.closest('.toggle-btn1'); 
		  const btn2 = e.target.closest('.toggle-btn2'); 
		  const btn3 = e.target.closest('.toggle-btn3'); 
		  
			const dagroup = e.target.closest('#dasearch');
			const ronggroup = e.target.closest('#rongsearch');
			const lungroup = e.target.closest('#lunsearch');
			const leliugroup = e.target.closest('#leliusearch');
			const chengroup = e.target.closest('#chensearch');
			const beigroup = e.target.closest('#beisearch');
			const leconggroup = e.target.closest('#lecongsearch');
			const longgroup = e.target.closest('#longsearch');
			const xingroup = e.target.closest('#xinsearch');
			const jungroup = e.target.closest('#junsearch');
			
			const biogroup = e.target.closest('#biosearch');
			const housegroup = e.target.closest('#housesearch');

		  // 判断是否为需要处理的元素
		  if (btn1) {
			const content1 = document.querySelector('.bordered-text1');
			content1.classList.toggle('expanded');
		  }
		  if (btn2) {
			const content2 = document.querySelector('.bordered-text2');
			content2.classList.toggle('expanded');
		  }
		  if (btn3) {
			const content3 = document.querySelector('.bordered-text3');
			content3.classList.toggle('expanded');
		  }
		  
		    if (dagroup) {
				searchTerm = '大良';
				performSearch();
			}
			if (ronggroup){
				searchTerm = '容桂';
				performSearch();
			}
			if (lungroup){
				searchTerm = '伦教';
				performSearch();
			}
			if (leliugroup){
				searchTerm = '勒流';
				performSearch();
			}
			if (chengroup){
				searchTerm = '陈村';
				performSearch();
			}
			if (beigroup){
				searchTerm = '北滘';
				performSearch();
			}
			if (leconggroup){
				searchTerm = '乐从';
				performSearch();
			}
			if (longgroup){
				searchTerm = '龙江';
				performSearch();
			}
			if (xingroup){
				searchTerm = '杏坛';
				performSearch();
			}
			if (jungroup){
				searchTerm = '均安';
				performSearch();
			}
			
			if (biogroup){
				searchTerm = '生物医药';
				performSearch();
			}if (housegroup){
				searchTerm = '家电';
				performSearch();
			}
		  
		});
		
		//首页
		/*
		const menuData = [
			{
				id: 'alllist',
				title: '概览'
			},
			{
				id: 'zslist',
				title: '中试平台'
			},
			{
				id: 'gnlist',
				title: '概念验证中心'
			},
			{
				id: 'clazz',
				title: '类别',
				submenu: [
					{
						id: 'area-list',
						title: '按镇街',
						content: {
							
						}
					},
					{
						id: 'indus-list',
						title: '按行业/产业',
						content: {
							
						}
					}
				]
			}
		];

    const mainMenu = document.getElementById('mainMenu');
    const seletionarea = document.getElementById('seletionarea');

    // 渲染菜单
    function renderMenu() {
        mainMenu.innerHTML = ``;
        menuData.forEach(item => {
            const li = document.createElement('li');
            li.className = 'menu-item';
            li.dataset.id = item.id;
            
            if (item.submenu) {
                // 有子菜单的项
                li.innerHTML = `
                    <div class="menu-title">
                        <span class="menu-text">${item.title}</span>
                        <i class="fas fa-chevron-right menu-arrow"></i>
                    </div>
                    <ul class="submenu">
                        ${item.submenu.map(subItem => `
                            <li class="submenu-item" data-id="${subItem.id}">
                                ${subItem.title}
                            </li>
                        `).join('')}
                    </ul>
                `;
                
                const menuTitle = li.querySelector('.menu-title');
                const submenu = li.querySelector('.submenu');
                const arrow = li.querySelector('.menu-arrow');
                
                menuTitle.addEventListener('click', function() {
                    submenu.classList.toggle('open');
                    arrow.classList.toggle('rotated');
                });
                
                // 子菜单项点击事件
                li.querySelectorAll('.submenu-item').forEach(subItem => {
                    subItem.addEventListener('click', function() {
                        // 移除所有活动状态
                        document.querySelectorAll('.menu-title, .submenu-item').forEach(el => {
                            el.classList.remove('active');
                        });
                        
                        // 设置当前活动状态
                        menuTitle.classList.add('active');
                        this.classList.add('active');
                        
                        // 显示内容
                        const selectedSubItem = item.submenu.find(s => s.id === this.dataset.id);
                        showContent(selectedSubItem.content);
                    });
                });
            } 
			else {
                // 没有子菜单的项
                li.innerHTML = `
                    <div class="menu-title">
                        <span class="menu-text">${item.title}</span>
                    </div>
                `;
                
                li.querySelector('.menu-title').addEventListener('click', function() {
                    // 移除所有活动状态
                    document.querySelectorAll('.menu-title, .submenu-item').forEach(el => {
                        el.classList.remove('active');
                    });
                    
                    // 设置当前活动状态
                    this.classList.add('active');
                    
                    // 显示内容
                    showContent(item.content);
                });
            }
            
            mainMenu.appendChild(li);
        });
    }

    // 显示内容
    function showContent(content) {
        seletionarea.innerHTML = `
            <div class="detail-header">
                <h1 class="detail-title">${content.title}</h1>
            </div>
            <div class="detail-body">
                ${content.sections.map(section => `
                    <div class="detail-section">
                        <h3><i class="fas fa-chevron-circle-right"></i> ${section.title}</h3>
                        <p>${section.content}</p>
                    </div>
                `).join('')}
            </div>
        `;
    }

    // 初始化
    renderMenu();
	*/
	document.querySelectorAll('.dropdown').forEach(dropdown => {
	  // 点击触发
	  dropdown.addEventListener('click', (e) => {
		e.stopPropagation();
		dropdown.querySelector('.dropdown-menu').classList.toggle('show');
	  });
	  
	  // 点击其他地方关闭
	  document.addEventListener('click', () => {
		dropdown.querySelector('.dropdown-menu').classList.remove('show');
	  });
	});
	
});