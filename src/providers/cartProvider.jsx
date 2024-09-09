import { useState, useEffect } from "react";
import { CartContext } from "../Contexts";
import { withUser, withAlert } from "../withProvider";
import { saveCart, getCart, getProductsByIds } from "../api";
import Loading  from "../loader";

function CartProvider({ isLoggedIn, children, setAlert }) {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dirty, setDirty] = useState(false);

  console.log('inCartProvd', typeof setAlert);
  
  useEffect(() => {
    setLoading(true);
    if (isLoggedIn) {
      getCart().then((cart) => {
        setCart(cart);
        setLoading(false);
      });
    } else {
      const savedData = JSON.parse(localStorage.getItem("cart") || "{}");
      getProductsByIds(Object.keys(savedData)).then((products) => {
        const savedCart = products.map((p) => ({
          product: p,
          quantity: savedData[p.id],
        }));
        setCart(savedCart);
        setLoading(false);
      });
    }
  }, [isLoggedIn]);

  function updateCart(newCart) {
    setCart(newCart);
    setDirty(false);

    // Prepare the cart as an object of {id: quantity} pairs
    const cartObject = newCart.reduce((acc, curr) => {
      return { ...acc, [curr.product.id]: curr.quantity };
    }, {});
    console.log('saveCart call karne ke phle ka obj',cartObject);
    if (!isLoggedIn) {
      const cartString = JSON.stringify(cartObject);
      localStorage.setItem("cart", cartString);
    } else {
      saveCart(cartObject); // Call saveCart with the {id: quantity} object
    }
  }

  function addToCart(productId, newCount) {
    console.log('alert must call');
    const newCart = [...cart];
    const product = newCart.find((p) => p.product.id === productId);
    console.log('addToCart ka newCart', newCart);

    if (!isLoggedIn) {
      // Non-logged in user
      if (product) {
        product.quantity = newCount;
        updateCart(newCart);
        localStorage.setItem("cart", JSON.stringify(newCart));
      } else {
        getProductsByIds([productId]).then((products) => {
          newCart.push({
            product: products[0],
            quantity: newCount,
          });
          console.log('just before update cart', newCart);
          updateCart(newCart);
        });
      }
    } else {
      // Logged in user
      getProductsByIds([productId]).then((products) => {
        if (product) {
          product.quantity = newCount;
        } else {
          newCart.push({
            product: products[0],
            quantity: newCount,
          });
        }

        // Transform the cart to an object of {id: quantity} pairs
        const cartObject = newCart.reduce((acc, curr) => {
          return { ...acc, [curr.product.id]: curr.quantity };
        }, {});

        updateCart(newCart); // Update the UI cart state
        saveCart(cartObject); // Save the transformed cart
      });
    }
  }

  function removeFromCart(productId) {
    const newCart = cart.filter((item) => item.product.id !== productId);
    updateCart(newCart);
  }

  function handleChange(newVal, productId) {
    setDirty(true);
    const newCart = cart.map((item) => {
      if (item.product.id === productId) {
        return { ...item, quantity: newVal };
      }
      return item;
    });
    updateCart(newCart);
  }
  console.log(cart);
  const countCart = cart.reduce((prev, curr) => prev + curr.quantity, 0);
  console.log(countCart);
  if (loading) {
    return <Loading/>;
  }

  return (
    <CartContext.Provider value={{ cart, countCart, updateCart, addToCart, removeFromCart, handleChange }}>
      {children}
    </CartContext.Provider>
  );
}

export default withAlert(withUser(CartProvider));