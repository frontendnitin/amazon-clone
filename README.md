# 🛒 Amazon Clone

A React-based Amazon-inspired e-commerce UI with a functional cart system and product browsing experience.

## 🔴 Live Demo
[frontendnitin-amazon.vercel.app](https://frontendnitin-amazon.vercel.app)

## 📸 Screenshots

[Home Page](amazon-clone/screenshots/homepage.png)
[Product Page](amazon-clone/screenshots/productPage.png)
[Product Details](amazon-clone/screenshots/productDetails.png)
[Cart](amazon-clone/screenshots/cart.png)

## ✨ Features

- 🏠 Amazon-like UI with navbar and category tabs (Electronics, Fashion, New Releases, Amazon Pay, etc.)
- 📦 Electronics product listing fetched dynamically using **Fetch API**
- 🔍 Product detail page with **image zoom on hover** (like Amazon.in)
- 🛒 Fully functional cart:
  - Add / Remove products
  - Update quantity
  - Persistent cart using **Local Storage**
- 🔗 Multi-page navigation with React Router
- 🔔 Toast notifications using React Toastify

## 🛠️ Tech Stack

Technology Usage 
 React | Frontend library 
 Vite | Build tool 
 React Router | Page navigation 
 Redux | Cart state management 
 Fetch API + Async/Await | Dynamic data fetching 
 React Toastify | Toast notifications 
 CSS | Styling 
 Local Storage | Cart persistence 

## 🚀 Run Locally

**1. Clone the repository:**
git clone https://github.com/frontendnitin/amazon-clone.git


**2. Navigate to project folder:**
cd amazon-clone/amazon-clone

**3. Install dependencies:**
npm install


**4. Start development server:**
npm run dev


**5. Open in browser:**
http://localhost:5173


## 📁 Project Structure

src/
├── Component/        # Reusable UI components
├── Screen/           # Page level components
├── redux/            # Redux store, actions, reducers
├── Data/             # Local JSON product data
└── App.jsx           # Main app with routing

## 🔮 Future Improvements

- [ ] Authentication (Login / Signup)
- [ ] Search and filter functionality
- [ ] Responsive design (mobile friendly)
- [ ] More product categories

## 👨‍💻 Developer

**Nitin Chauhan**
- GitHub: [@frontendnitin](https://github.com/frontendnitin)
- Email: nitin.business2003@gmail.com
