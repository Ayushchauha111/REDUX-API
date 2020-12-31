import logo from "./logo.svg";
import "./App.css";
import HomeContainer from "./containers/HomeContainer";
function App() {
  return (
    <div>
      <HomeContainer />
      <div className="add_to_cart">
        <img src="https://www.mangoextensions.com/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/a/j/ajaxaddtocartsite.jpg" />
      </div>
      <div className="cart-wrapper item">
        <div className="image-wrapper">
          <img src="https://specials-images.forbesimg.com/imageserve/5f711ee0dbc9f02046cfbefb/960x0.jpg?fit=scale" />
        </div>
        <div className="text-wrapper">
          <span>I_PHONE</span>
          <span>price:1500 USD$</span>
        </div>
        <div className="button-wrapper">
          <button>ADD-TO-CART</button>
        </div>
      </div>
    </div>
  );
}

export default App;
