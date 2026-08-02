# 班级助手 - GitHub Pages 部署指南

## 快速部署步骤

### 1. 创建 GitHub 仓库

1. 访问 [github.com](https://github.com)
2. 点击右上角 "+" → "New repository"
3. 仓库名填写：`class-assistant`（或你喜欢的名字）
4. 选择 "Public"（公开仓库，GitHub Pages 免费）
5. 勾选 "Add a README file"
6. 点击 "Create repository"

### 2. 上传文件

**方法 A：网页上传（最简单）**

1. 在仓库页面点击 "Add file" → "Upload files"
2. 把 `class-assistant` 文件夹里的所有文件拖进去
3. 点击 "Commit changes"

**方法 B：使用 Git 命令**

```bash
cd class-assistant
git init
git add .
git commit -m "初始版本：班级助手全部功能"
git branch -M main
git remote add origin https://github.com/你的用户名/class-assistant.git
git push -u origin main
```

### 3. 开启 GitHub Pages

1. 在仓库页面点击 "Settings"（设置）
2. 左侧菜单找到 "Pages"
3. 在 "Source" 下选择：
   - Branch: `main`
   - Folder: `/ (root)`
4. 点击 "Save"

### 4. 等待部署

- GitHub 会自动部署，通常 1-3 分钟
- 部署完成后，你会看到：
  ```
  Your site is live at https://你的用户名.github.io/class-assistant/
  ```

### 5. 手机访问

- 手机浏览器打开上面的链接
- 可以添加到主屏幕（分享 → 添加到主屏幕）

---

## 注意事项

1. **所有文件必须在根目录**，不要放在子文件夹
2. **入口文件必须是 `index.html`**（已满足）
3. **GitHub Pages 是静态托管**，不支持后端（当前版本纯前端，没问题）
4. **自定义域名**（可选）：在 Pages 设置里可以绑定自己的域名

---

## 访问地址格式

```
https://你的 GitHub 用户名.github.io/class-assistant/
```

例如：
```
https://zhangsan.github.io/class-assistant/
```

---

## 更新代码

修改代码后，重新上传或 push 到 GitHub，Pages 会自动更新（通常 1-2 分钟）。

---

## 遇到问题？

1. **页面 404**：检查文件是否在根目录，`index.html` 是否存在
2. **样式不加载**：检查 CSS/JS 路径是否正确（当前使用相对路径，应该没问题）
3. **更新不生效**：清除浏览器缓存，或等几分钟让 GitHub 重新部署
