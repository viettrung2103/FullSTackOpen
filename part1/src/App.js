//props is a parameter in, by adding this, we can give dynamic response to our app by add name = newName
// arrow function
const Hello = (props) => {
  return (
    <div>
      <h2>Hello {props.name}, you are {props.age}</h2>
    </div>
  )
}

//note that React component must be capitalized!!
const Footer = () => {
  return (
    <div>
      greeting app created by <a href="https://github.com/viettrung2103">viettrung</a>
    </div>
  )
}
const AppWithSquareArray = () => {
  console.log('Test with Square Bracke')
  return [
    <h1>Hello, I am using square bracket</h1>
  ]
}

const AppWithFragment = () => {
  console.log('Test with Fragement');
  return (
    <>
    <h3>Test With Fragment</h3>
    </>
  )
}

//Component can be created with following XML-way or wrap as array, however, as it is stipulated or aggreed upon that <div> element is added to root component (App Component)</div>
const App = () => {
  //can add function here
  const now = new Date();
  const name = 'Peter';
  const age = 10;
  return (
    <div>
      <h1>Greetings Hi</h1>
      <Hello name = 'Trung' age={26+10} />
      <Hello name = 'Trinh' age={age}/>
      <Hello name = {name} age={age+10}/>
      <p>Hello world, it is {now.toString()}</p>
      <AppWithSquareArray />
      <AppWithFragment/>
      <Footer />
    </div>
  )
}

export default App