
import LoginForm from "./Login";
import Counter from "./Counter";

const App = () => {
  const users = [
    { id: 1, name: "Ahmed", email: "sadakc15@gmail.com" },
    { id: 2, name: "Haaruun", email: "sadakc15@gmail.com" },
  ];

  return (
    <div>
      <LoginForm/>
      <Counter/>
    </div>
  );
};

export default App;