import { Suspense } from "react";
import { SnackbarProvider } from "notistack";
import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./appRoutes/AppRoutes";
import { AppHeader } from "./components/templates";
import { Container } from "./components/molecules";
import { LinearProgress } from "./components/atoms";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<LinearProgress />}>
          <AppHeader />
          <Container maxWidth="xl" sx={{ my: '2.4rem' }}>
            <SnackbarProvider maxSnack={3}>
              <AppRoutes />
            </SnackbarProvider>
          </Container>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
