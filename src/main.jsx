import { createRoot } from 'react-dom/client'
import AppRoutes from "./routes";
import GlobalStyles from  "./GlobalStyles";

createRoot(document.getElementById('root')).render(
    <>
        <GlobalStyles />
         <AppRoutes />
    </>

)