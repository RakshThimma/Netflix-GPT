
import React from "react"
import ReactDOM from "react-dom/client"
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
    return(
        <Provider store={appStore}>
        <Body />
        </Provider>
    )
}
root.render(<AppLayout />);
