
import { ThemeProvider } from './components/ThemeProvider';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Index from './pages/Index';
import ButtonDoc from './pages/docs/ButtonDoc';
import CardDoc from './pages/docs/CardDoc';
import DocHome from './pages/docs/DocHome';

// Create a router with all routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
  },
  {
    path: '/docs',
    element: <DocHome />,
  },
  {
    path: '/docs/button',
    element: <ButtonDoc />,
  },
  {
    path: '/docs/card',
    element: <CardDoc />,
  },
]);

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
