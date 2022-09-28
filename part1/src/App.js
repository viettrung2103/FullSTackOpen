const user = {
  firstName: 'Trung',
  lastName: 'Doan'
};

function formatName(user) {
  return `${user.firstName} ${user.lastName}`;
}


const App = () => {
  const now = new Date();
  const a = 10;
  const b = 20;
  return (
    <div>
      <h1>
        Hello, {formatName(user)}!
      </h1>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
    </div>
  )
}

export default App