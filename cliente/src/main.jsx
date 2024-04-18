import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AppProvider from "./context/AppProvider.jsx";
import { Toaster } from "sonner";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider>
    <Toaster position="top-right" closeButton={true} style={{width: '14rem'}}/>
    <App />
  </AppProvider>
);
