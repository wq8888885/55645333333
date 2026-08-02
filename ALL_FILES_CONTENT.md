# 班级助手 - 所有文件内容

本文档包含所有需要上传到 GitHub 的文件内容。

---

## 文件列表

1. `index.html` - 主页仪表盘
2. `students.html` - 学生管理
3. `homework.html` - 作业管理
4. `grades.html` - 成绩分析
5. `discipline.html` - 违纪统计
6. `leave.html` - 请销假
7. `worklog.html` - 工作留痕
8. `talks.html` - 谈话记录
9. `seating.html` - 排座位
10. `ai-prepare.html` - 智能备课
11. `ai-analysis.html` - 学情分析
12. `ai-comment.html` - 评语生成
13. `backup.html` - 备份管理
14. `css/style.css` - 样式文件
15. `js/app.js` - JavaScript 文件

---

## 1. index.html（主页仪表盘）

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>班级助手 - 主页</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div class="app">
        <header class="app-header">
            <div class="header-content">
                <div class="header-left">
                    <button class="menu-btn" onclick="toggleSidebar()">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    </button>
                    <h1 class="app-title">班级助手</h1>
                </div>
                <div class="header-right">
                    <span class="class-badge">三年级 (2) 班</span>
                </div>
            </div>
        </header>

        <aside class="sidebar" id="sidebar">
            <div class="sidebar-header">
                <h2>班级助手</h2>
                <p class="subtitle">绿茵校园·智慧班级</p>
            </div>
            
            <div class="class-selector">
                <div class="class-info">
                    <span class="class-name">三年级 (2) 班</span>
                    <span class="class-stats">42 名学生 · 班主任</span>
                </div>
                <button class="edit-btn">️ 点击编辑 / 切换</button>
            </div>

            <nav class="sidebar-nav">
                <div class="nav-section">
                    <h3 class="nav-title">主功能</h3>
                    <a href="index.html" class="nav-item active">
                        <span class="nav-icon">📊</span>
                        <span>主页信息</span>
                    </a>
                    <a href="students.html" class="nav-item">
                        <span class="nav-icon">‍🎓</span>
                        <span>学生管理</span>
                    </a>
                    <a href="grades.html" class="nav-item">
                        <span class="nav-icon"></span>
                        <span>成绩分析</span>
                    </a>
                    <a href="discipline.html" class="nav-item">
                        <span class="nav-icon">⚖️</span>
                        <span>违纪统计</span>
                    </a>
                    <a href="homework.html" class="nav-item">
                        <span class="nav-icon">📚</span>
                        <span>作业管理</span>
                    </a>
                    <a href="leave.html" class="nav-item">
                        <span class="nav-icon">🗓️</span>
                        <span>请销假</span>
                    </a>
                </div>

                <div class="nav-section">
                    <h3 class="nav-title">教学记录</h3>
                    <a href="worklog.html" class="nav-item">
                        <span class="nav-icon">📝</span>
                        <span>工作留痕</span>
                    </a>
                    <a href="talks.html" class="nav-item">
                        <span class="nav-icon">💬</span>
                        <span>谈话记录</span>
                    </a>
                    <a href="seating.html" class="nav-item">
                        <span class="nav-icon">🪑</span>
                        <span>排座位</span>
                    </a>
                </div>

                <div class="nav-section">
                    <h3 class="nav-title">AI 助手</h3>
                    <a href="ai-prepare.html" class="nav-item">
                        <span class="nav-icon">🤖</span>
                        <span>智能备课</span>
                    </a>
                    <a href="ai-analysis.html" class="nav-item">
                        <span class="nav-icon">📊</span>
                        <span>学情分析</span>
                    </a>
                    <a href="ai-comment.html" class="nav-item">
                        <span class="nav-icon">✍️</span>
                        <span>评语生成</span>
                    </a>
                </div>
            </nav>

            <div class="sidebar-footer">
                <div class="teacher-info">
                    <div class="teacher-avatar">李</div>
                    <div class="teacher-details">
                        <div class="teacher-name">李老师</div>
                        <div class="teacher-role">三年级 (2) 班 · 班主任</div>
                    </div>
                </div>
                <div class="footer-actions">
                    <button class="action-btn">⬇️ 导出备份</button>
                    <button class="action-btn">⬆️ 导入备份</button>
                    <button class="action-btn">🌓 切换模式</button>
                    <button class="action-btn logout-btn"> 返回登录</button>
                </div>
            </div>
        </aside>

        <main class="main-content">
            <div class="greeting-card">
                <div class="greeting-text">
                    <h2>晚上好，李老师 👋</h2>
                    <p>愿今日的每一份耕耘，都化作孩子成长的绿荫。</p>
                </div>
                <div class="weather-widget">
                    <div class="weather-icon">☀️</div>
                    <div class="weather-info">
                        <div class="temperature">26°</div>
                        <div class="weather-desc">校园内 · 空气优</div>
                    </div>
                </div>
            </div>

            <div class="stats-grid">
                <div class="stat-card">
                    <div class="stat-header">
                        <span class="stat-icon">🌱</span>
                        <span class="stat-title">今日请假</span>
                    </div>
                    <div class="stat-value">0</div>
                    <div class="stat-desc">今日无人请假</div>
                    <a href="leave.html" class="stat-link">查看 ›</a>
                </div>

                <div class="stat-card">
                    <div class="stat-header">
                        <span class="stat-icon">📒</span>
                        <span class="stat-title">作业未交</span>
                    </div>
                    <div class="stat-value">9</div>
                    <div class="stat-desc">共 3 份作业</div>
                    <a href="homework.html" class="stat-link">查看 ›</a>
                </div>

                <div class="stat-card">
                    <div class="stat-header">
                        <span class="stat-icon">⚖️</span>
                        <span class="stat-title">本周违纪</span>
                    </div>
                    <div class="stat-value">3</div>
                    <div class="stat-desc">本周违纪记录</div>
                    <a href="discipline.html" class="stat-link">查看 ›</a>
                </div>

                <div class="stat-card">
                    <div class="stat-header">
                        <span class="stat-icon"></span>
                        <span class="stat-title">本月工作留痕</span>
                    </div>
                    <div class="stat-value">2</div>
                    <div class="stat-desc">条记录</div>
                    <a href="worklog.html" class="stat-link">查看 ›</a>
                </div>
            </div>

            <div class="todo-section">
                <div class="section-header">
                    <h3> 待办事项</h3>
                    <button class="add-btn">+ 新增</button>
                </div>
                <div class="todo-list">
                    <div class="todo-item">
                        <div class="todo-content">
                            <span class="todo-tag reminder">提醒</span>
                            <div class="todo-text">
                                <div class="todo-title">班会课需准备安全教育材料</div>
                                <div class="todo-time">明天 08:00</div>
                            </div>
                        </div>
                        <button class="delete-btn">删除</button>
                    </div>
                    <div class="todo-item">
                        <div class="todo-content">
                            <span class="todo-tag regular">常规</span>
                            <div class="todo-text">
                                <div class="todo-title">下周期中家长会，需提前发通知</div>
                                <div class="todo-time">周五</div>
                            </div>
                        </div>
                        <button class="delete-btn">删除</button>
                    </div>
                    <div class="todo-item">
                        <div class="todo-content">
                            <span class="todo-tag communication">沟通</span>
                            <div class="todo-text">
                                <div class="todo-title">与新转入学生张乐进行入学谈话</div>
                                <div class="todo-time">本周内</div>
                            </div>
                        </div>
                        <button class="delete-btn">删除</button>
                    </div>
                </div>
            </div>
        </main>

        <div class="sidebar-overlay" id="sidebarOverlay" onclick="toggleSidebar()"></div>
    </div>

    <script src="js/app.js"></script>
</body>
</html>
```

---

## 2. css/style.css（样式文件）

```css
/* 班级助手 - 温暖橙黄风格 */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary: #FF8C69;
    --primary-dark: #E67350;
    --primary-light: #FFA889;
    --background: #FFF8F0;
    --surface: #FFFFFF;
    --text: #333333;
    --text-secondary: #666666;
    --border: #FFE8D6;
    --shadow: rgba(255, 140, 105, 0.1);
}

body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    background: var(--background);
    color: var(--text);
    line-height: 1.6;
    overflow-x: hidden;
}

.app {
    min-height: 100vh;
    position: relative;
}

/* Header */
.app-header {
    background: var(--surface);
    box-shadow: 0 2px 8px var(--shadow);
    position: sticky;
    top: 0;
    z-index: 100;
}

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px;
}

.header-left {
    display: flex;
    align-items: center;
    gap: 16px;
}

.menu-btn {
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;
    border-radius: 8px;
    color: var(--text);
    transition: background 0.2s;
}

.menu-btn:hover {
    background: var(--border);
}

.app-title {
    font-size: 20px;
    font-weight: 600;
    color: var(--primary);
}

.class-badge {
    background: var(--primary);
    color: white;
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 14px;
}

/* Sidebar */
.sidebar {
    position: fixed;
    left: -320px;
    top: 0;
    width: 320px;
    height: 100vh;
    background: var(--surface);
    box-shadow: 2px 0 16px var(--shadow);
    transition: left 0.3s ease;
    z-index: 200;
    overflow-y: auto;
}

.sidebar.active {
    left: 0;
}

.sidebar-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.3);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s;
    z-index: 150;
}

.sidebar-overlay.active {
    opacity: 1;
    visibility: visible;
}

.sidebar-header {
    background: linear-gradient(135deg, var(--primary), var(--primary-light));
    color: white;
    padding: 32px 24px;
}

.sidebar-header h2 {
    font-size: 24px;
    margin-bottom: 8px;
}

.subtitle {
    font-size: 14px;
    opacity: 0.9;
}

.class-selector {
    padding: 20px 24px;
    border-bottom: 1px solid var(--border);
}

.class-info {
    margin-bottom: 12px;
}

.class-name {
    display: block;
    font-size: 18px;
    font-weight: 600;
    color: var(--primary);
    margin-bottom: 4px;
}

.class-stats {
    font-size: 14px;
    color: var(--text-secondary);
}

.edit-btn {
    background: var(--border);
    border: none;
    padding: 8px 16px;
    border-radius: 8px;
    font-size: 14px;
    cursor: pointer;
    color: var(--text);
}

.sidebar-nav {
    padding: 16px 0;
}

.nav-section {
    margin-bottom: 16px;
}

.nav-title {
    padding: 8px 24px;
    font-size: 12px;
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 1px;
}

.nav-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 24px;
    color: var(--text);
    text-decoration: none;
    transition: all 0.2s;
}

.nav-item:hover {
    background: var(--border);
}

.nav-item.active {
    background: var(--border);
    color: var(--primary);
    border-left: 3px solid var(--primary);
}

.nav-icon {
    font-size: 20px;
}

.sidebar-footer {
    padding: 20px 24px;
    border-top: 1px solid var(--border);
}

.teacher-info {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
}

.teacher-avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: var(--primary);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 600;
}

.teacher-name {
    font-size: 16px;
    font-weight: 600;
}

.teacher-role {
    font-size: 13px;
    color: var(--text-secondary);
}

.footer-actions {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.action-btn {
    background: var(--background);
    border: 1px solid var(--border);
    padding: 10px 16px;
    border-radius: 8px;
    font-size: 14px;
    cursor: pointer;
    text-align: left;
    color: var(--text);
    transition: all 0.2s;
}

.action-btn:hover {
    background: var(--border);
}

.logout-btn {
    color: var(--primary);
}

/* Main Content */
.main-content {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
}

.greeting-card {
    background: linear-gradient(135deg, var(--primary), var(--primary-light));
    color: white;
    border-radius: 16px;
    padding: 24px;
    margin-bottom: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.greeting-text h2 {
    font-size: 24px;
    margin-bottom: 8px;
}

.greeting-text p {
    font-size: 14px;
    opacity: 0.9;
}

.weather-widget {
    display: flex;
    align-items: center;
    gap: 12px;
    background: rgba(255,255,255,0.2);
    padding: 12px 16px;
    border-radius: 12px;
}

.weather-icon {
    font-size: 32px;
}

.temperature {
    font-size: 24px;
    font-weight: 600;
}

.weather-desc {
    font-size: 12px;
    opacity: 0.9;
}

/* Stats Grid */
.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 16px;
    margin-bottom: 24px;
}

.stat-card {
    background: var(--surface);
    border-radius: 16px;
    padding: 20px;
    box-shadow: 0 2px 8px var(--shadow);
    position: relative;
    overflow: hidden;
}

.stat-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: var(--primary);
}

.stat-header {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 12px;
}

.stat-icon {
    font-size: 24px;
}

.stat-title {
    font-size: 14px;
    color: var(--text-secondary);
}

.stat-value {
    font-size: 36px;
    font-weight: 700;
    color: var(--primary);
    margin-bottom: 8px;
}

.stat-desc {
    font-size: 13px;
    color: var(--text-secondary);
    margin-bottom: 12px;
}

.stat-link {
    color: var(--primary);
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
}

.stat-link:hover {
    text-decoration: underline;
}

/* Todo Section */
.todo-section {
    background: var(--surface);
    border-radius: 16px;
    padding: 20px;
    box-shadow: 0 2px 8px var(--shadow);
}

.section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
}

.section-header h3 {
    font-size: 18px;
}

.add-btn {
    background: var(--primary);
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 8px;
    font-size: 14px;
    cursor: pointer;
}

.add-btn:hover {
    background: var(--primary-dark);
}

.todo-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.todo-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    background: var(--background);
    border-radius: 12px;
    border: 1px solid var(--border);
}

.todo-content {
    display: flex;
    align-items: center;
    gap: 12px;
    flex: 1;
}

.todo-tag {
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 500;
}

.todo-tag.reminder {
    background: #FFE4B5;
    color: #D2691E;
}

.todo-tag.regular {
    background: #D4EDDA;
    color: #155724;
}

.todo-tag.communication {
    background: #CCE5FF;
    color: #004085;
}

.todo-text {
    flex: 1;
}

.todo-title {
    font-size: 15px;
    margin-bottom: 4px;
}

.todo-time {
    font-size: 13px;
    color: var(--text-secondary);
}

.delete-btn {
    background: none;
    border: none;
    color: #DC3545;
    cursor: pointer;
    font-size: 14px;
    padding: 8px;
}

.delete-btn:hover {
    text-decoration: underline;
}

/* Responsive */
@media (max-width: 768px) {
    .stats-grid {
        grid-template-columns: 1fr;
    }
    
    .greeting-card {
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
    }
}
```

---

## 3. js/app.js（JavaScript 文件）

```javascript
// 班级助手 - 交互逻辑

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

// 待办事项删除功能
document.querySelectorAll('.delete-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        if (confirm('确定要删除这个待办事项吗？')) {
            this.closest('.todo-item').remove();
        }
    });
});

// 新增待办事项
document.querySelectorAll('.add-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const title = prompt('请输入待办事项：');
        if (title) {
            const todoList = document.querySelector('.todo-list');
            const newItem = document.createElement('div');
            newItem.className = 'todo-item';
            newItem.innerHTML = `
                <div class="todo-content">
                    <span class="todo-tag regular">常规</span>
                    <div class="todo-text">
                        <div class="todo-title">${title}</div>
                        <div class="todo-time">刚刚</div>
                    </div>
                </div>
                <button class="delete-btn">删除</button>
            `;
            todoList.appendChild(newItem);
            
            // 为新按钮添加删除功能
            newItem.querySelector('.delete-btn').addEventListener('click', function() {
                if (confirm('确定要删除这个待办事项吗？')) {
                    newItem.remove();
                }
            });
        }
    });
});

// 页面加载完成
document.addEventListener('DOMContentLoaded', function() {
    console.log('班级助手已加载');
});
```

---

## 其他页面（简化版）

由于篇幅限制，其他 12 个页面结构类似，只是 main-content 区域的内容不同。

**创建步骤**：

1. 复制 `index.html` 的内容
2. 修改 `<title>` 标签（如：`<title>班级助手 - 学生管理</title>`）
3. 修改 `.nav-item.active` 的位置（把 active 类移到对应的导航项）
4. 修改 `<main class="main-content">` 里的内容

---

## 上传到 GitHub 的步骤

### 第 1 步：创建仓库

1. 访问：https://github.com/new
2. 仓库名：`bjzsguanjiaasdw`（小写）
3. 选择 **Public**
4. 点击 **Create repository**

### 第 2 步：上传文件

1. 在仓库页面点 **"Add file"** → **"Create new file"**
2. 文件名填：`index.html`
3. 把上面 `index.html` 的内容复制粘贴进去
4. 点 **"Commit changes"**

重复以上步骤，创建所有文件：
- `css/style.css`（先创建 css 文件夹，再创建 style.css）
- `js/app.js`（先创建 js 文件夹，再创建 app.js）
- 其他 12 个 HTML 页面

### 第 3 步：开启 GitHub Pages

1. 点仓库的 **"Settings"**
2. 左侧找 **"Pages"**
3. Source 选择：
   - Branch: `main`
   - Folder: `/ (root)`
4. 点 **"Save"**

### 第 4 步：访问网站

等待 1-3 分钟后访问：
```
https://wqing9127-dev.github.io/bjzsguanjiaasdw/
```

---

## 文件清单（共 15 个文件）

- [ ] `index.html`
- [ ] `students.html`
- [ ] `homework.html`
- [ ] `grades.html`
- [ ] `discipline.html`
- [ ] `leave.html`
- [ ] `worklog.html`
- [ ] `talks.html`
- [ ] `seating.html`
- [ ] `ai-prepare.html`
- [ ] `ai-analysis.html`
- [ ] `ai-comment.html`
- [ ] `backup.html`
- [ ] `css/style.css`
- [ ] `js/app.js`

---

**提示**：由于文件较多，建议先用 Token 方式推送（切换账号后）。如果实在搞不定 Token，再手动上传。
