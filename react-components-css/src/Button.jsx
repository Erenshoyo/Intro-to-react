
function Button(){
    //Need to use camelCase naming conventions.
    //All property value needs to a string.
    //Each property should be separated by "," not ";"
    const styles = {
        backgroundColor: "brown",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    }

    return(
        // <button className="Button">Click me</button> // External
        // <button className={styles.Button(ClassName)}>Click me</button> // Modules
        <button style={styles}>Click me</button> //Inline
    );
}

export default Button