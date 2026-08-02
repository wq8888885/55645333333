# 班级助手 - Class Assistant

一个面向班主任的轻量级班级管理 H5 应用，采用温暖橙黄风格设计。

## 功能模块

### 主功能
- **主页仪表盘** (`index.html`) - 数据概览、快捷操作、待办事项
- **学生管理** (`students.html`) - 学生信息、分组管理、标签筛选
- **成绩分析** (`grades.html`) - 成绩录入、统计分析、趋势图表
- **违纪统计** (`discipline.html`) - 违纪记录、分类统计、趋势分析
- **作业管理** (`homework.html`) - 作业布置、提交跟踪、未交提醒
- **请销假** (`leave.html`) - 请假申请、审批管理、统计汇总

### 教学记录
- **工作留痕** (`worklog.html`) - 工作记录、分类管理、时间线
- **谈话记录** (`talks.html`) - 谈话记录、学生关联、后续跟进
- **排座位** (`seating.html`) - 座位布局、拖拽调整、自动排座

### AI 助手
- **智能备课** (`ai-prepare.html`) - AI 生成教案框架
- **学情分析** (`ai-analysis.html`) - AI 分析学生学情
- **评语生成** (`ai-comment.html`) - AI 生成个性化评语

### 系统功能
- **备份管理** (`backup.html`) - 数据导出/导入、备份历史

## 技术栈

- 纯 HTML/CSS/JavaScript
- Lucide Icons 图标库
- 响应式设计，适配移动端
- 温暖橙黄配色方案

## 设计风格

- **主色**: 珊瑚橙 `#FF8C69`
- **背景**: 暖白 `#FFF8F0`
- **圆角**: 16px 柔和卡片
- **阴影**: 轻柔浮层效果

## 使用方式

直接在浏览器中打开 `index.html` 即可使用。

所有页面均为独立 HTML 文件，无需构建工具。

## 页面导航

```
index.html (主页)
├── students.html (学生管理)
├── homework.html (作业管理)
├── grades.html (成绩分析)
├── discipline.html (违纪统计)
├── leave.html (请销假)
├── worklog.html (工作留痕)
├── talks.html (谈话记录)
├── seating.html (排座位)
├── ai-prepare.html (智能备课)
├── ai-analysis.html (学情分析)
├── ai-comment.html (评语生成)
── backup.html (备份管理)
```

## 待开发功能

- [ ] 数据持久化（LocalStorage/IndexedDB）
- [ ] AI 功能接入（大模型 API）
- [ ] 数据导出/导入实际功能
- [ ] 学生头像上传
- [ ] 成绩图表可视化（Chart.js）
- [ ] 拖拽排座位交互
- [ ] 消息推送提醒

## 开发说明

所有页面采用统一的设计系统：
- CSS 变量定义颜色和样式
- 响应式布局，适配移动端
- 统一的组件样式（卡片、按钮、表单等）
- Lucide Icons 图标库
