import { Boilerplate } from "../layouts/Boilerplate";
import { RenderPostCategory } from "../components/RenderPostCategory";

function LifestyleCategory() {
    return (
        <Boilerplate name={'Lifestyle'}>
            <RenderPostCategory category={'lifestyle'} />
        </Boilerplate>
    );
}

export { LifestyleCategory };