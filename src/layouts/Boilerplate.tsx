import Header from "./Header";
import Footer from "./Footer";

type BoilerProps = {
    children: React.ReactChild
}

function Boilerplate(props: BoilerProps) {
    return (
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>
    );
}

export default Boilerplate;