import Header from "./Header";
import Footer from "./Footer";

type BoilerProps = {
    children: React.ReactNode
}

function Boilerplate(props: BoilerProps) {
    return (
        <div className="h-screen flex flex-col">
            <Header />
            <div className="h-full">
                {props.children}
            </div>
            <Footer />
        </div>
    );
}

export default Boilerplate;