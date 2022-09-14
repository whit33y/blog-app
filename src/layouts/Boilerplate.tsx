import Header from "./Header";
import Footer from "./Footer";

type BoilerProps = {
    name: string
    children: React.ReactNode
}

function Boilerplate(props: BoilerProps) {
    return (
        <div className="h-screen flex flex-col">
            <Header />
            <h1 className="text-3xl text-center">{props.name}</h1>
            {props.children}
            <Footer />
        </div>
    );
}

export default Boilerplate;