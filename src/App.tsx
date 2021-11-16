import React from "react";
import  Routes  from "./routes";
import { FormProvider } from "./contexts/FormContext";

const App = () => {
return(
    <FormProvider>
    <Routes />
    </FormProvider>
)
}

export default App;
