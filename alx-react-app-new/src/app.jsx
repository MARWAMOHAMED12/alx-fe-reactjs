import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Counter from './components/Counter'; // ✅ ضيف الاستيراد الجديد

function App() {
  return (
    <div>
      <Header />
      <UserProfile name="Marwa" age="22" bio="I love coding and learning new things!" />
      <MainContent />
      <Counter />   {/* ✅ عرض الكاونتر */}
      <Footer />
    </div>
  );
}

export default App;