
import LoginForm from "./Login";

const App = () => {
  const users = [
    { id: 1, name: "Ahmed", email: "sadakc15@gmail.com" },
    { id: 2, name: "Haaruun", email: "sadakc15@gmail.com" },
  ];

  return (
    <div>
      <LoginForm/>
    </div>
  );
};

export default App;