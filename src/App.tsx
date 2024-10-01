import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import MainMenuPage from './pages/MainMenuPage';
import Chapter1Page from './pages/Chapter1Page';
import Chapter2Page from './pages/Chapter2Page';
import Chapter3Page from './pages/Chapter3Page';
import Chapter4Page from './pages/Chapter4Page';
import Chapter5Page from './pages/Chapter5Page';
import Chapter6Page from './pages/Chapter6Page';
import Header from './layout/Header';
import QuizPage from './pages/QuizPage';

const CatchAllRoute = () => {
  const location = useLocation();
  return <Navigate to={'/' + location.search} replace />;
};

function App() {

  // const accessToken = useStore((state) => state.accessToken);
  const accessToken = '1';

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/sign-in"
          element={accessToken ? <Navigate to="/" /> : <SignInPage />}
        />
        <Route
          path="/main-menu"
          element={accessToken ? <MainMenuPage /> : <Navigate to="/sign-in" />}
        />
        <Route
          path="/"
          element={accessToken ? <MainMenuPage /> : <Navigate to="/sign-in" />}
        />
        <Route
          path="/Chapter-1"
          element={accessToken ? <Chapter1Page /> : <Navigate to="/sign-in" />}
        />
        <Route
          path="/Chapter-2"
          element={accessToken ? <Chapter2Page /> : <Navigate to="/sign-in" />}
        />
        <Route
          path="/Chapter-3"
          element={accessToken ? <Chapter3Page /> : <Navigate to="/sign-in" />}
        />
        <Route
          path="/Chapter-4"
          element={accessToken ? <Chapter4Page /> : <Navigate to="/sign-in" />}
        />
        <Route
          path="/Chapter-5"
          element={accessToken ? <Chapter5Page /> : <Navigate to="/sign-in" />}
        />
        <Route
          path="/Chapter-6"
          element={accessToken ? <Chapter6Page /> : <Navigate to="/sign-in" />}
        />
        <Route
          path="/Quiz/:chapter"
          element={accessToken ? <QuizPage /> : <Navigate to="/sign-in" />}
        />
        <Route path="*" element={<CatchAllRoute />} />
      </Routes>
    </Router>
  );
}

export default App;
