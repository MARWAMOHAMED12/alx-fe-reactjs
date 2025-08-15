import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <UserProfile name="Marwa" age={22} bio="Learning React and loving it!" />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;