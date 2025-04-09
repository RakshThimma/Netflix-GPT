
import React from "react"
import ReactDOM from "react-dom/client"

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
    return(
        <div>
            <h1 className="text-red-500 text-3xl">Netflix GPT</h1>
        </div>
    )
}
root.render(<AppLayout />);
