import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

import { store, persistor } from "./src/store";
import MainStack from "./src/stacks/MainStack";
import Footer from "./src/components/Footer";

const App: React.FC = () => {
    return(
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor} >
                <NavigationContainer>
                   <MainStack />
                    <Footer />
                </NavigationContainer>
            </PersistGate>
        </Provider>
    );
}

export default App;