import Boilerplate from "../layouts/Boilerplate";
import RenderPostDetails from "../components/RenderPostDetails";

function Home() {
    return (
        <Boilerplate name={'More details...'}>
            <RenderPostDetails />
        </Boilerplate>
    );
}

export default Home;