import Card_Big from "./Card_Big";
import Header from "./Header"
import Hero_Text from "./Hero_Text";
import Services from "./Services";
import Footer from "./Footer"

function App() {
  return (
    <div>
    <div className="container mx-auto">

      <Header/>
      <div class="xl:py-16"></div>

      <Hero_Text/>
      <div class="py-32"></div>
      <Services/>
      
      <div class="py-20"></div>
      <Card_Big/>

      <div class="py-32"></div>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
