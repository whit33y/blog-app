import { Header } from "./Header";
import { Footer } from "./Footer";

type BoilerplateType = {
    name: string
    children: React.ReactNode
}

function Boilerplate(props: BoilerplateType) {
    return (
        <div className="flex flex-col bg-slate-200 w-screen h-screen">
            <Header />
            <h1 className="text-3xl text-center mb-4">{props.name}</h1>
            {props.children}
            <Footer />
        </div>
    );
}

export { Boilerplate };