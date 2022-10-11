import { Boilerplate } from "../layouts/Boilerplate";
import { RenderPostCategory } from "../components/RenderPostCategory";

function TechnologyCategory() {
    return (
        <Boilerplate name={'Technology'}>
            <RenderPostCategory category={'tech'} />
        </Boilerplate>
    );
}

export { TechnologyCategory };