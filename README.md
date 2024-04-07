# 🦸‍♂️🦸‍♀️ Marvel Characters App

Welcome to the Marvel Characters App! This project is a React application built with Next.js and TypeScript, allowing users to explore a vast array of Marvel characters from the Marvel Comics universe.

<a href="https://zara-ten.vercel.app/"> View Demo</a>

## 📄 Table of contents

  <ol style="list-style: none;">
    <li>
      ⚒️
      <a href="#%EF%B8%8F-features"> Features</a>
    </li>
    <li>
      🖥️
      <a href="#%EF%B8%8F-technologies-used"> Technologies Used</a>
    </li>
    <li>
      🏛️
      <a href="#%EF%B8%8F-architecture"> Architecture</a>
    </li>
    <li>
      🆗 
      <a href="#-best-practices"> Best Practices</a>
      <ul>
        <li>
          ⚛️ <a href="#%EF%B8%8F-atomic-design"> Atomic Design</a>
        </li>
        <li>
          🎨 <a href="#-theme"> Theme</a>
        </li>
      </ul>
    </li>
    <li>
      ✅
      <a href="#-getting-started">Getting Started</a>
    </li>
    <li>
      📝
      <a href="#-license">License</a>
    </li>
  </ol>



## ⚒️ Features

<p align="center">
<img width="60%" alt="image" src="https://github.com/ftarantuviez/zara/assets/65835145/e346028b-5803-4e58-89d0-88cb8c0b88eb">
</p>

* **Browse Characters**: Explore a diverse range of Marvel characters, from classic heroes to notorious villains.
* **Search Functionality**: Easily search for specific characters using the search bar.
* **Detailed Character Profiles**: Access detailed information about each character, including their biography, abilities, appearances, and more.
* **Responsive Design**: Enjoy a seamless experience across various devices, thanks to the responsive design.



## 🖥️ Technologies Used

* **React** (v18)
* **Next.js** (v14.1.4)
* **Typescript** (v5)
* **Eslint** (v8)
* **MD5** (v2.3.0)
* **Axios** (v1.6.8)
* [**Marvel Comics API**](https://developer.marvel.com/docs#!/public/getCreatorCollection_get_0)


## 🏛️ Architecture

```bash
.
├── app (next.js routes)
├── assets (reusable assets)
├── components (components following Atomic Design)
│   ├── atoms
│   ├── layouts
│   ├── molecules
│   ├── organisms
├── config (configuration accross app)
├── constants (contants variables)
├── contexts (contexts used in app)
├── hooks (custom hooks)
├── public (assets, and public stuff)
├── test (test configurations)
├── types (typescript types)
└── utils (utils functions)
```

## 🆗 Best practices

### ⚛️ Atomic Design
In this project, [Atomic Design pattern](https://medium.com/@janelle.wg/atomic-design-pattern-how-to-structure-your-react-application-2bb4d9ca5f97) is implemented, organizing our UI components into atoms, molecules, organisms, templates, and pages. This methodology promotes modularity and scalability, enhancing development efficiency and ensuring a cohesive user experience.

### 🎨 Theme

Additionally, it is enhanced [Tailwind's Theme](https://tailwindcss.com/docs/theme) by storing common values as CSS variables, ensuring consistency and flexibility throughout our application.

## ✅ Getting Started
To get started with the Marvel Characters App, follow these steps:

**Clone the Repository:**

```
git clone https://github.com/ftarantuviez/zara.git
```

**Install Dependencies:**

```
cd zara
npm install
```

**Set up Marvel API Key:**

Create a `.env.local` file in the root directory.
Add your API keys to the .env.local file:

```
NEXT_PUBLIC_MARVEL_PUBLIC_API_KEY=f6b1449dcdeb408ce00e39897897dbb1
NEXT_PUBLIC_MARVEL_PRIVATE_API_KEY=6ad8e61de3ea6052070ca8682c2a4d0fda98b3a2
NEXT_PUBLIC_BASE_URL=https://gateway.marvel.com/v1
```

**Run the Development Server:**

```
npm run dev
```

**Open the Application:**

Open http://localhost:3000 in your browser.



## 📝 License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).


