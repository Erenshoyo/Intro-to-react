function List({category = "category", items = []}){

    //const category = category;
    //const itemList = items;

    //const fruits = ["apple", "orange", "banana","pineapple","mango"] //Array of strings
    // const fruits = [{id:1,name:"apple",calories: 100}, 
    //                 {id:2,name:"orange",calories:45}, 
    //                 {id:3,name:"banana",calories:105},
    //                 {id:4,name:"pineapple",calories:37},
    //                 {id:5,name:"mango",calories:60}]; //Array of objects
    //fruits.sort((a, b) => a.name.localeCompare(b.name)); //Alphabetical Order.
    //fruits.sort((a, b) => b.name.localeCompare(a.name)); //Reverse Alphabetical Order.
    //fruits.sort((a, b) => a.calories - b.calories); //Numerical Order.
    //fruits.sort((a, b) => b.calories - a.calories); //Reverse numerical Order.

    //const lowCalfruits = fruits.filter(fruit => fruit.calories < 100)
    //const highCalfruits = fruits.filter(fruit => fruit.calories >= 100)

    const listItems1 = items.map(item => <li key={item.id}>
                                            {item.name}: &nbsp;
                                           <b>{item.calories}</b></li>);

    // const listItems1 = itemList.map(item => <li key={item.id}>
    //                                         {item.name}: &nbsp;
    //                                        <b>{item.calories}</b></li>);
   
   // const listItems1 = fruits.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp;
    //                                                         <b>{fruit.calories}</b></li>);
    // const listItems2 = lowCalfruits.map(lowCalfruit => <li key={lowCalfruit.id}>{lowCalfruit.name}: &nbsp;
    //                                                         <b>{lowCalfruit.calories}</b></li>);
    // const listItems3 = highCalfruits.map(highCalfruit => <li key={highCalfruit.id}>{highCalfruit.name}: &nbsp;
    //                                                         <b>{highCalfruit.calories}</b></li>);

    return(
        <div>
            <h3 className="list-category">{category}</h3>
            <ul className="list-items">{listItems1}</ul>
            <ol className="list-items">{listItems1}</ol>
            {/* <h3>Fruits less than 100 calories.</h3>
            <ol>{listItems2}</ol>
            <ol>{listItems2}</ol>
            <h3>Fruits greater than or equal to 100 calories.</h3>
            <ol>{listItems3}</ol>
            <ol>{listItems3}</ol> */}
        </div>
    );
}

export default List