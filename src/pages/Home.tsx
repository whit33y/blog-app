import Boilerplate from "../layouts/Boilerplate";
import RenderPost from "../components/RenderPost";

function Home() {
    return (
        <Boilerplate name={'Home'}>
            <div>
                <RenderPost />
                <RenderPost />
                <RenderPost />
                <RenderPost />
            </div>
        </Boilerplate>
    );
}

export default Home;