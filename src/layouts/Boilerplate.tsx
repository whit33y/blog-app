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
            <p className="text-3xl text-center">{props.name}</p>
            {props.children}
            <Footer />
        </div>
    );
}

export default Boilerplate;