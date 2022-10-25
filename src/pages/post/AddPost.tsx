import { Boilerplate } from '../../layouts/Boilerplate';
import { RenderAddPost } from '../../components/RenderAddPost';

function AddPost() {
  return (
    <Boilerplate name={'Add post'}>
      <RenderAddPost />
    </Boilerplate>
  );
}

export { AddPost };
