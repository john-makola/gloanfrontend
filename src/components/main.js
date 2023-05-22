import { Footer, Banner, ProductsHomepage } from "./website";
import { TopMenuLoginMain } from "./logins";
function Main() {
  return (
    <div className="App">
      <TopMenuLoginMain />
      <Banner />
      <ProductsHomepage />
      <Footer />
    </div>
  );
}

export default Main;
