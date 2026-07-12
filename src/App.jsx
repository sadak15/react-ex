import UserList from "./UserList";

const App = () => {
  const users = [
    { id: 1, name: "Ahmed", email: "sadakc15@gmail.com" },
    { id: 2, name: "Haaruun", email: "sadakc15@gmail.com" },
  ];

  return (
    <div>
      <UserList users={users} />
    </div>
  );
};

export default App;