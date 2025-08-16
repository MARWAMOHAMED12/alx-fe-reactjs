import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <UserProfile name="Marwa" age="22" bio="I love coding and learning new things!" />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;