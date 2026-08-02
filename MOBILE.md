# 班级助手 - 移动端预览指南

## 在手机上打开

### 方法 1：直接打开（推荐）
1. 将 `class-assistant` 文件夹上传到你的服务器或托管平台
2. 在手机浏览器访问对应的 URL

### 方法 2：本地预览
1. 在电脑上启动本地服务器：
   ```bash
   cd class-assistant
   python3 -m http.server 8080
   ```
2. 确保手机和电脑在同一 WiFi 下
3. 手机浏览器访问：`http://电脑 IP:8080`

### 方法 3：添加到手机桌面
1. 在手机浏览器打开页面
2. 点击分享按钮
3. 选择"添加到主屏幕"
4. 之后可以像 App 一样打开

## 移动端优化特性

✅ 响应式布局，适配各种手机屏幕  
✅ 触摸优化，点击反馈流畅  
✅ 防止双击缩放  
✅ 支持安全区域（iPhone X+ 刘海屏适配）  
✅ 可添加到主屏幕（PWA 就绪）  

## 页面列表

- `index.html` - 主页仪表盘
- `students.html` - 学生管理
- `homework.html` - 作业管理
- `grades.html` - 成绩分析
- `discipline.html` - 违纪统计
- `leave.html` - 请销假
- `worklog.html` - 工作留痕
- `talks.html` - 谈话记录
- `seating.html` - 排座位
- `ai-prepare.html` - 智能备课
- `ai-analysis.html` - 学情分析
- `ai-comment.html` - 评语生成
- `backup.html` - 备份管理

## 注意事项

- 所有页面均为独立 HTML 文件，无需构建
- 图标使用 Lucide Icons CDN，需要网络连接
- 建议在 Chrome/Safari 移动端浏览器中打开
- 数据目前为模拟数据，后续可接入 LocalStorage 持久化
