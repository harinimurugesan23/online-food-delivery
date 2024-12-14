import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import Register from './components/Register';
import Features from './components/Features';
import Localities from './components/Localities';
import MainCourse from './components/MainCourse';
import Starters from './components/starters';
import FriedRice from './components/friedrice';
import Briyani from './components/Briyani';
import Curry from './components/Curry';
import Kebab from './components/Kebab';
import Naan from './components/Naan';
import Mushroom from './components/Mushroom';
import Soup from './components/Soup';
import Rolls from './components/Rolls';
import Nachos from './components/Nachos';
import Samosa from './components/Samosa';
import Wings from './components/Wings';
import Chickenrice from './components/Chickenrice';
import Hakka from './components/Hakka';
import Schezwan from './components/Schezwan';
import Vegrice from './components/Vegrice';
import Eggrice from './components/Eggrice';
import Bag from './components/Bag'; // Import the Bag component for the cart
import Validation from './components/Validation'; // Import the Validation component
import Payment from './components/Payment';
import Admin from './components/Admin';
import Help from './components/Help';
import { CartProvider } from './components/CartContext'; // Import CartProvider for global cart state
import './styles.css';
import About from './components/About';
function App() {
    return (
        <CartProvider> {/* Wrap entire app in CartProvider */}
            <Router>
                <div>
                    <Header />
                    <Routes>
                        <Route path="/" element={<MainContent />} />
                        <Route path="/features" element={<Features />} />
                        <Route path="/localities" element={<Localities />} />
                        <Route path="/maincourse" element={<MainCourse />} />
                        <Route path="/starters" element={<Starters />} />
                        <Route path="/friedrice" element={<FriedRice />} />
                        <Route path="/signin" element={<SignIn />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/briyani" element={<Briyani />} />
                        <Route path="/curry" element={<Curry />} />
                        <Route path="/kebab" element={<Kebab />} />
                        <Route path="/naan" element={<Naan />} />
                        <Route path="/mushroom" element={<Mushroom />} />
                        <Route path="/soup" element={<Soup />} />
                        <Route path="/rolls" element={<Rolls />} />
                        <Route path="/nachos" element={<Nachos />} />
                        <Route path="/samosa" element={<Samosa />} />
                        <Route path="/wings" element={<Wings />} />
                        <Route path="/chickenrice" element={<Chickenrice />} />
                        <Route path="/hakka" element={<Hakka />} />
                        <Route path="/schezwan" element={<Schezwan />} />
                        <Route path="/vegrice" element={<Vegrice />} />
                        <Route path="/eggrice" element={<Eggrice />} />
                        <Route path="/bag" element={<Bag />} /> {/* Add route for Bag component */}
                        <Route path="/validation" element={<Validation />} /> {/* Add route for Validation component */}
                        <Route path="/payment" element={<Payment />} />
                        <Route path="/admin" element={<Admin />} />
						<Route path="/about" element={<About />} />
						<Route path="/help" element={<Help />} />
                    </Routes>
                    <Footer />
                </div>
            </Router>
        </CartProvider>
    );
}

export default App;
