 

# 📘 React JS - Set 5: useState & CSS Styling

Welcome to **Set 5** of our React JS Learning Series!
In this module, we focus on managing **component state using `useState`** and applying **CSS Styling** in multiple ways to enhance the visual appeal of your components. You'll learn how React components become interactive and dynamic with the help of state, and how to style them using **inline, external, and module-based CSS**.

---

## 🔍 Topics Covered

### ✅ Introduction to `useState` Hook

* What is state in React?
* Syntax: `const [value, setValue] = useState(initialValue)`
* Updating state using `setValue`
* Re-rendering behavior on state update

### ✅ Common useState Use-Cases

* Counter application
* Toggling UI elements
* Form field value updates
* Conditional rendering using state

### ✅ Multiple State Variables

* Declaring multiple independent states in a single component
* Best practices for organizing state

---

### ✅ Styling in React

* **Inline Styling** using JS objects
* **CSS File Styling**: External `.css` files
* **CSS Modules**: Local scoped styles
* Difference between `className` and `style` props

### ✅ Dynamic Styling with State

* Changing styles on user action (e.g., toggle dark/light mode)
* Conditional `className` and `style` changes based on `useState`

---

## 🧠 Practice Tasks

1. Build a **counter app** with `+` and `-` buttons using `useState`.
2. Create a button that **toggles background color** using a boolean state.
3. Make a **form component** with two inputs (name, email) and display typed values in real time.
4. Use **inline styling** to highlight a paragraph on a button click.
5. Create two components with **different CSS module styles** and demonstrate local scope.

---

## ⚠️ Important Notes

> ✅ `useState` is imported from `react`: `import { useState } from 'react'`
> ✅ Do **not mutate** the state directly; always use the updater function
> ✅ **Re-rendering happens** whenever state is updated
> ✅ Use **camelCase** for inline style keys (`backgroundColor`, `fontSize`)
> ✅ CSS Modules use `styles.className` instead of plain string

---

## 📦 Folder Structure Example

```bash
src/
├── App.jsx
├── main.jsx
├── components/
│   ├── Counter.jsx
│   ├── Form.jsx
│   └── ThemeToggle.jsx
├── styles/
│   ├── global.css
│   └── Form.module.css
```

---

## 📽️ Related Video

🎬 Watch full explanation and live coding demo on YouTube:
**[React JS Set 5 – useState and CSS Styling](https://youtu.be/5cJJ38GYAHc)**

---

## 🔖 Hashtags for Sharing

`#ReactJS` `#useState` `#CSSModules` `#ReactHooks` `#ReactStyling` `#CodeWithKrishna` `#WebDevelopment`

---

## 🙌 Contribution

Fork the repository, complete the tasks, and submit your solutions in a separate `answers/` folder. Share your learning journey with us!

---

## 📫 Stay Connected

* 📢 [YouTube Channel](https://www.youtube.com/channel/UCGgAQxhXY2g6tsD-PQ4kywg/)
* 📺 [React JS Playlist](https://www.youtube.com/playlist?list=PLxVP80QwEJLCop3DoCuJW2OnCekDlsu1_)
* 💻 Instructor: **CodeWithKrishna**
 