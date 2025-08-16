import UserContext from "./UserContext";
import ProfilePage from "./components/ProfilePage";

function App() {
  const userData = {
    name: "Marwa",
    email: "marwa@example.com",
    age: 22,
  };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
