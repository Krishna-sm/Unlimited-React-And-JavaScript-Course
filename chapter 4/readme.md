  
# 📘 React JS - Set 4: JSX and HTML

Welcome to **Set 4** of our React JS learning series. In this module, we dive deep into **JSX**, its relationship with **HTML**, and how React handles rendering elements. This README provides a structured guide to everything covered in this section along with practice questions and key notes.

---

## 🔍 Topics Covered

### ✅ Introduction to JSX
- What is JSX?
- Why JSX is not exactly HTML?
- JSX as a syntactic sugar for `React.createElement()`
- Embedding expressions in JSX using `{}`

### ✅ Creating React App Quickly
- Using `npx create-react-app` to set up your React project
- Folder structure overview (`public`, `src`, `main.jsx`)

### ✅ JSX vs HTML
- Self-closing tags
- className vs class
- htmlFor vs for
- CamelCase for inline styles

### ✅ Components & Exporting
- Creating a functional component
- Using `export default`
- Rendering the component inside `main.jsx`

### ✅ JSX Practice Questions
- Create a heading using JSX
- Apply inline styles
- Nest elements and return them properly
- Use images with JSX (local & online)

### ✅ Reusable Components with Props
- Creating simple card components
- Passing and using props
- Rendering dynamic content

### ✅ Rendering Lists
- Using `.map()` in JSX
- Key prop in lists
- Mapping through arrays to create elements

### ✅ Integrating Maps (Google Map/React Leaflet/etc.)
- Basics of map integration (covered briefly)
- Package suggestion for further integration

---

## 🧠 Practice Tasks

1. Create a JSX element that shows your name, a photo, and a short bio.
2. Use inline styling to style a heading.
3. Create a component `<Card>` that accepts `title` and `description` as props and renders them.
4. Render a list of favorite movies using `.map()`.
5. Load an image from your local `src/assets/` folder and show it in JSX.

---

## ⚠️ Important Notes

> ✅ JSX must return a **single parent element**  
> ✅ Use `className` instead of `class`  
> ✅ Always use **keys** when rendering a list  
> ✅ Inline CSS in JSX is written as an object  
> ✅ Use `camelCase` for style properties (`backgroundColor`, `fontSize`, etc.)

---

## 📦 Folder Structure Example

```bash
src/
├── App.jsx
├── main.jsx
├── components/
│   ├── Card.jsx
│   └── List.jsx
└── assets/
    └── myphoto.jpg
````

---

## 📽️ Related Video

Watch the full walkthrough on YouTube:
**[React JS Set 4 – JSX and HTML with Practice](https://youtu.be/3IS7k014e_Y) 

---

## 🔖 Hashtags for Sharing

`#ReactJS` `#JSX` `#HTMLinReact` `#ReactComponents` `#WebDevelopment` `#FrontendLearning` `#CodeWithKrishna`

---

## 🙌 Contribution

Feel free to fork the repo, solve the practice tasks, and submit a PR with your answers in a separate `answers/` folder. Let’s learn together!

---

## 📫 Stay Connected

* 📢 [Youtube Channel](https://www.youtube.com/channel/UCGgAQxhXY2g6tsD-PQ4kywg/)
* 📺 [YouTube Playlist](https://www.youtube.com/playlist?list=PLxVP80QwEJLCop3DoCuJW2OnCekDlsu1_)
* 💻 Instructor: CodeWithKrishna
 