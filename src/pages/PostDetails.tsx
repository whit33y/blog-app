import Boilerplate from "../layouts/Boilerplate";
import { RenderPostDetails } from "../components/RenderPostDetails";

function Home() {
    return (
        <Boilerplate name={'Read more'}>
            <RenderPostDetails />
        </Boilerplate>
    );
}

export default Home;