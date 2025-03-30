
import { ThemeProvider } from './components/ThemeProvider';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Index from './pages/Index';
import NotFound from './pages/NotFound';

// Doc pages
import DocHome from './pages/docs/DocHome';
import ButtonDoc from './pages/docs/ButtonDoc';
import CardDoc from './pages/docs/CardDoc';
import BadgeDoc from './pages/docs/BadgeDoc';
import InputDoc from './pages/docs/InputDoc';
import SwitchDoc from './pages/docs/SwitchDoc';
import AvatarDoc from './pages/docs/AvatarDoc';
import ModalDoc from './pages/docs/ModalDoc';
import DropdownDoc from './pages/docs/DropdownDoc';
import TooltipDoc from './pages/docs/TooltipDoc';
import AccordionDoc from './pages/docs/AccordionDoc';
import ProgressDoc from './pages/docs/ProgressDoc';
import TabsDoc from './pages/docs/TabsDoc';
import StepperDoc from './pages/docs/StepperDoc';
import ToastDoc from './pages/docs/ToastDoc';
import SkeletonDoc from './pages/docs/SkeletonDoc';

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
  {
    path: '/docs/badge',
    element: <BadgeDoc />,
  },
  {
    path: '/docs/input',
    element: <InputDoc />,
  },
  {
    path: '/docs/switch',
    element: <SwitchDoc />,
  },
  {
    path: '/docs/avatar',
    element: <AvatarDoc />,
  },
  {
    path: '/docs/modal',
    element: <ModalDoc />,
  },
  {
    path: '/docs/dropdown',
    element: <DropdownDoc />,
  },
  {
    path: '/docs/tooltip',
    element: <TooltipDoc />,
  },
  {
    path: '/docs/accordion',
    element: <AccordionDoc />,
  },
  {
    path: '/docs/progress',
    element: <ProgressDoc />,
  },
  {
    path: '/docs/tabs',
    element: <TabsDoc />,
  },
  {
    path: '/docs/stepper',
    element: <StepperDoc />,
  },
  {
    path: '/docs/toast',
    element: <ToastDoc />,
  },
  {
    path: '/docs/skeleton',
    element: <SkeletonDoc />,
  },
  {
    path: '*',
    element: <NotFound />,
  }
]);

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
