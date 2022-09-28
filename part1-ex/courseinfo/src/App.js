const Header = (props) => {
  return(
  <div>
    <h1>{props.course}</h1>
  </div>
  )
}


const Content = (props) => {
  const partList = [{
    name:'Fundamentals of React',
    exercise:10,
  },{
    name:'Using props to pass data',
    exercise:7,
  },{
    name:'State of a component',
    exercise:14,
  },];
  return(
    <div>
      <Part partList = {partList}/>
      
  </div>
  )
}

const Part = (props) => {
  return props.partList.map((part)=>{
    return(
    <div>
      Part {part.name} has {part.exercise} exercises.
    </div>
    )
  })
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercise {props.ex}</p>
    </div>
  )
}



//Header takes care of rendering the name of the course
//Content renders the parts and their number of exercise
//Total renders the total number of exercise
const App = () => {
  const course = 'Half Stack application development '
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course = {course}/>
      <Content />
      <Total ex = {exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App