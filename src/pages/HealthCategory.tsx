import { Boilerplate } from "../layouts/Boilerplate";
import { RenderPostCategory } from "../components/RenderPostCategory";

function HealthCategory() {
    return (
        <Boilerplate name={'Health'}>
            <RenderPostCategory category={'health'} />
        </Boilerplate>
    );
}

export { HealthCategory };