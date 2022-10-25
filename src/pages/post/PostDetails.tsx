import { Boilerplate } from '../../layouts/Boilerplate';
import { RenderPostDetails } from '../../components/RenderPostDetails';

function PostDetails() {
  return (
    <Boilerplate name={'Read more'}>
      <RenderPostDetails />
    </Boilerplate>
  );
}

export { PostDetails };
