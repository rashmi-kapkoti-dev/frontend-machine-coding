import { ThemeProvider } from './context/ThemeContext';
import Router from './routes';

const App = () => {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
};

export default App;
