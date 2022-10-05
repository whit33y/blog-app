import { RenderPostIt } from "../components/RenderPostIt";
import { Boilerplate } from "../layouts/Boilerplate";

function ItCategory() {
    return (
        <Boilerplate name={'IT'}>
            <RenderPostIt />
        </Boilerplate>
    );
}

export { ItCategory };