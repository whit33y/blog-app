import { Boilerplate } from "../layouts/Boilerplate";
import { RenderPostHealth } from "../components/RenderPostHealth";

function HealthCategory() {
    return (
        <Boilerplate name={'Health'}>
            <RenderPostHealth />
        </Boilerplate>
    );
}

export { HealthCategory };