function Button(){

    // let count = 0;
    // const handleClick = (name) => {
    //     if(count < 3){
    //         count++;
    //         console.log(`${name}, you clicked me ${count} time/s`)
    //     }
    //     else{
    //         console.log(`${name}, stop clicking me!😓`)
    //     }
    // };
    // //const handleCLick2 = (name) => console.log(`${name}, stop clicking me!😓`)
    // return(
    //     <div>
    //         <button onClick={() => handleClick("Tauhid")} className="">Click me</button>
    //         {/* <button onClick={()=> handleCLick2("Tauhid")} className="">Click me</button> */}
    //     </div>
    // );

    const handleClick = (e) => e.target.textContent = "Ouch!!!🥲";


    return(
        <div>
            <button onDoubleClick={(e) => handleClick(e)}>Click me 😊</button>
        </div>
    )
}

export default Button