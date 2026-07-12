
import LoginForm from "./Login";
import Counter from "./Counter";
import DoubleCounter from "./doubleCounterReducer"

const App = () => {
  const users = [
    { id: 1, name: "Ahmed", email: "sadakc15@gmail.com" },
    { id: 2, name: "Haaruun", email: "sadakc15@gmail.com" },
  ];

  return (
    <div>
      {/* <LoginForm/>
      <Counter/> */}
      <DoubleCounter/>
    </div>
  );
};

export default App;