import Student from "./Students.jsx"

function App() {
  //To store Data value curly braces{} are used.
  //To store strings "" is used.
  return (
    <>
      <Student name = "Amzed" age = {54} isStudent = {false}/>
      <Student name = "Afroza" age = {47} isStudent = {false}/>
      <Student name = "Tauhid" age = {24} isStudent = {true}/>
      <Student name = "Tuba" age = {17} isStudent = {true}/>
      <Student name = "Turjo"/>
    </>
  );

}

export default App
