import Layout from "./components/Layout/Layout";
import "./App.css";

function App(props: {active: string}) {
    return (
        <Layout active={props.active}/>
    );
}

export default App;
