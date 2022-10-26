/* eslint-disable react/no-unescaped-entities */
import { Boilerplate } from '../layouts/Boilerplate';

function NotFound() {
  return (
    <Boilerplate name={'Not found'}>
      <div className="flex flex-row mx-40 p-2 border-l-2 border-r-2 pr-1 border-slate-400 ">
        <h1 className="text-3xl">The page you are looking for doesn't exist</h1>
      </div>
    </Boilerplate>
  );
}

export { NotFound };
