import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sigin-in-and-sign-up/sign-in-and-sign-up.component'
import { Route ,Switch} from 'react-router-dom'

// const Hats = () =>{
//   return(
//     <div>
//     <h1>HATS</h1>
//   </div>
//   )
 
// }

function App() {
  return (
    <div >
      {/* <HomePage/> */}
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/shop" component={ShopPage}></Route>
        <Route exact path="/signin" component={SignInAndSignUp}></Route>

      </Switch>
      
     
    </div>
  );
}

export default App;
