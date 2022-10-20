import { Boilerplate } from "../../layouts/Boilerplate";
import { RenderPostHome } from "../../components/RenderPostHome";

function Home() {
    return (
        <Boilerplate name={'Home'}>
            <RenderPostHome />
        </Boilerplate>
    );
}

export { Home };