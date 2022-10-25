import { Boilerplate } from "../../layouts/Boilerplate";
import { RenderPostCategory } from "../../components/RenderPostCategory";

function ItCategory() {
    return (
        <Boilerplate name={'IT'}>
            <RenderPostCategory category={'it'} />
        </Boilerplate>
    );
};

export { ItCategory };