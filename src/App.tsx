import Appbar from "./components/Appbar/Appbar";
import DishFrom from "./components/DishForm/DishFrom";
import Dishes from "./components/Dishes/Dishes";
import Cart from "./components/Cart/Cart";
import {useState} from "react";
import {Dish} from "./types";

function App() {
  const [dishes, setDishes] = useState<Dish[]>([
    {id: '1', name: 'Plov', description: 'Very tasty pilaf', image: 'https://www.spendwithpennies.com/wp-content/uploads/2019/02/Rice-Pilaf-SpendWithPennies-4.jpg', price: 250},
    {id: '2', name: 'Another plov', description: 'Also tasty pilaf', image: 'https://chefjackovens.com/wp-content/uploads/2022/02/My-project-1.jpg', price: 350},
  ]);

  const addDish = (dish: Dish) => {
    setDishes(prevState => [...prevState, dish]);
  };

  return (
      <>
      <header>
        <Appbar/>
      </header>
        <main className='container-fluid'>
          <div className='row mt-2'>
            <div className='col-4'>
              <DishFrom onSubmit={addDish}/>
            </div>
            <div className='col-4'>
              <Dishes dishes={dishes} />
            </div>
            <div className='col-4'>
              <Cart></Cart>
            </div>
          </div>
        </main>
      </>
  )
}

export default App
