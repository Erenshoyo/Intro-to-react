import PropTypes from 'prop-types'
//"props" is a JS object
function Student({ name = "Guest", age = 0, isStudent = false }){

    return(
    <div className="student">
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Student: {isStudent ? "Yes" : "No"}</p>
    </div>
    );
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}

//defaultProps = default values for props in case they are not 
//               passed from the parent components.
//               name: "Guest"
// Obsolete in modern react.


export default Student