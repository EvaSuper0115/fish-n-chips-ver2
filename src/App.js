import "./App.css";

import PageHero from "./PageHero";
import IntroductionPage from "./IntroductionPage";
import OpeningHours from "./OpeningHours";
import PartyCatering from "./PartyCatering";
import MenuFilter from "./MenuFilter";
import MenuFish from "./MenuFish";
import MenuChips from "./MenuChips";
import MenuSausage from "./MenuSausage";
import MenuBurger from "./MenuBurger";
import MenuPie from "./MenuPie";
import MenuChicken from "./MenuChicken";
import MenuOthers from "./MenuOthers";
import MenuChildrensMeal from "./MenuChildrensMeal";
import MenuMealDeal from "./MenuMealDeal";
import MenuOAP from "./MenuOAP";
import MenuDrinks from "./MenuDrinks";
import MenuExtras from "./MenuExtras";
import FloatingOrderNote from "./FloatingOrderNote";
import Footer from "./Footer";

function App() {
  const mainMenuHref = "#menu";
  const menuItems = [
    { menuTitle: "Fish", menuHref: "fish-menu" },
    { menuTitle: "Chips", menuHref: "chips-menu" },
    { menuTitle: "Sausages", menuHref: "sausages-menu" },
    { menuTitle: "Burgers", menuHref: "burgers-menu" },
    { menuTitle: "Pies", menuHref: "pies-menu" },
    { menuTitle: "Chicken", menuHref: "chicken-menu" },
    { menuTitle: "Others", menuHref: "others-menu" },
    { menuTitle: "Children's Meal", menuHref: "children's-meal-menu" },
    { menuTitle: "Meal Deal", menuHref: "meal-deal-menu" },
    { menuTitle: "OAP Meal", menuHref: "OAP-cod-&-chips-menu" },
    { menuTitle: "Drinks", menuHref: "drinks-menu" },
    { menuTitle: "Extras", menuHref: "extras-menu" },
  ];

  return (
    <div className="App">
      <nav className="navbar sticky-top navbar-expand-lg navbar-decoration">
        <a
          className="navbar-brand brand high-light-text"
          href="index.html"
          title="Adastral Fish & Chips Homepage"
        >
          Adastral Fish & Chips
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link high-light-text"
                href="#What-we-make"
                title="What we make"
              >
                {" "}
                Specialty
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link high-light-text"
                href="#opening-hours"
                title="Adastral Fish & Chips Opening Hours"
              >
                Hours
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link high-light-text"
                href="#party-catering"
                title="Adastral Fish & Chips Party Catering Service"
              >
                Book
              </a>
            </li>
            <li className="nav-item dropdown">
              <button
                className="nav-link high-light-text dropdown-toggle"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                title="Adastral Fish & Chips Menu"
              >
                Menu
              </button>
              <div
                className="dropdown-menu dropdown-menu-text"
                aria-labelledby="navbarDropdownMenuLink"
              >
                {menuItems.map((items, index) => (
                  <a
                    className="dropdown-item"
                    title={`${items.menuTitle} Menu`}
                    key={index}
                    href={`#${items.menuHref}`}
                  >
                    {items.menuTitle}
                  </a>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <PageHero id="Home" menuHref={mainMenuHref} />
      <IntroductionPage id="What-we-make" />
      <OpeningHours id="opening-hours" />
      <PartyCatering id="party-catering" menuHref={mainMenuHref} />
      <MenuFilter id="menu" menuItems={menuItems} />
      <MenuFish menuDetails={menuItems[0]} />
      <MenuChips menuDetails={menuItems[1]} />
      <MenuSausage menuDetails={menuItems[2]} />
      <MenuBurger menuDetails={menuItems[3]} />
      <MenuPie menuDetails={menuItems[4]} />
      <MenuChicken menuDetails={menuItems[5]} />
      <MenuOthers menuDetails={menuItems[6]} />
      <MenuChildrensMeal menuDetails={menuItems[7]} />
      <MenuMealDeal menuDetails={menuItems[8]} />
      <MenuOAP menuDetails={menuItems[9]} />
      <MenuDrinks menuDetails={menuItems[10]} />
      <MenuExtras menuDetails={menuItems[11]} />
      <FloatingOrderNote />
      <Footer />
    </div>
  );
}

export default App;
