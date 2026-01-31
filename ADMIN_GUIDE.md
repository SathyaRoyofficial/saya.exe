# 🛠️ Saya.exe - Content Management Guide

This guide explains how to update your portfolio, add new projects, and manage categories manually. Since this is a static site (for maximum cooling performance ❄️), updates are done by editing the code directly.

## 📂 1. Adding / Editing Projects
All project data is stored in **`src/App.jsx`**.

1. Open `src/App.jsx`.
2. Look for the constant named `PROJECTS` (approx lines 7-50).
3. Each project is an object inside the list `{ ... }`.

### To Add a New Project:
Copy this template and paste it into the `PROJECTS` list:
```javascript
{
  id: 7, // Make sure this is unique
  name: "Your Project Name",
  image: "https://your-image-url.com/image.jpg", // Or path to local asset like "/assets/project1.png"
  caption: "Short description of the project",
  tag: "Vibecode", // Must match one of your Filters
  url: "https://project-link.com"
},
```

### To Change an Image:
- **Option A (Online)**: Use a URL from Unsplash, Imgur, etc.
- **Option B (Local)**: 
  1. Put your image in `public/assets/`.
  2. Set the `image` property to `"/assets/your-image.png"`.

---

## 🏷️ 2. Managing Categories (Filters)
Filters are controlled by the `FILTERS` constant in **`src/App.jsx`**.

1. Open `src/App.jsx`.
2. Find:
   ```javascript
   const FILTERS = ["All", "Vibecode", "Manual", "Websites", "Apps"];
   ```
3. **Add a new category**: Add it to this list string, e.g., `"Design"`.
4. **Important**: When you add a new filter here, make sure you tag your projects with the exact same name in the `PROJECTS` list (e.g., `tag: "Design"`).

---

## 👤 3. Updating Profile Info
Profile details are in **`src/components/ProfilePanel.jsx`**.

1. Open `src/components/ProfilePanel.jsx`.
2. **Name & Role**: Look for the `<h2>` and `<p>` tags around line 60-70.
3. **Social Links**: Look for the list near the bottom where it says `GitHub`, `Twitter`, etc. You can change the labels or add `href="https://..."` to make them clickable.

### Creating a clickable link:
Current code:
```javascript
{ icon: Github, label: 'GitHub' },
```
Change to (you'll need to update the logic slightly or just hardcode links):
*Ideally, you should modify the array to include URLs:*
```javascript
// In ProfilePanel.jsx logic
{ icon: Github, label: 'GitHub', url: 'https://github.com/yourusername' }
// Then in the map function:
<a href={item.url} ... >
```

---

## 🎨 4. Changing Colors & Fonts
Global styles are in **`src/index.css`**.

- **Primary Colors**: Change `--bg-primary` (background) or `--accent` (highlight color).
- **Fonts**: We added "Press Start 2P" for the logo. To use it elsewhere, added `font-family: 'Press Start 2P', system-ui;` to any CSS class.

---

## 🚀 5. Deploying Updates
After making changes:
1. Open your terminal in VS Code.
2. Run `npm run build` to check for errors.
3. Commit and push to GitHub (if connected to Vercel/Netlify, it will auto-publish).
