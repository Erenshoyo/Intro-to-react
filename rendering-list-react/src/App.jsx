import List from "./List.jsx"

function App() {

  const fruits = [{id:1,name:"apple",calories: 100}, 
                    {id:2,name:"orange",calories:45}, 
                    {id:3,name:"banana",calories:105},
                    {id:4,name:"pineapple",calories:37},
                    {id:5,name:"mango",calories:60}];

  const vegetables = [{id:6,name:"potato",calories: 110}, 
                    {id:7,name:"celery",calories:15}, 
                    {id:8,name:"corn",calories:25},
                    {id:9,name:"corn",calories:63},
                    {id:10,name:"broccoli",calories:50}];
  
  return(
    <div>
      {/* {fruits.length > 0 ? <List items = {fruits} category = "Fruits"/>: null} */}
      {fruits.length > 0 && <List items = {fruits} category = "Fruits"/>} 
      {vegetables.length > 0 ? <List items = {vegetables} category = "Vegetables"/>: null}
    </div>
  );
}

export default App
