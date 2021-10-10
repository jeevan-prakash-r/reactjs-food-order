import { useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShown, isCartIsShown] = useState(false);
  
  function showCardHandler()
  {
    isCartIsShown(true);
  }

  function hideCardHandler()
  {
    isCartIsShown(false);
  }

  return (
    <CartProvider>
      {cartIsShown && <div>Cart...</div>}
      <Header onShowCart={showCardHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
