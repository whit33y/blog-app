import { Boilerplate } from "../layouts/Boilerplate";
function About() {
    return (
        <Boilerplate name={'About me and about a project'}>
            <div className="flex flex-col items-center mt-5 sm:mx-0 md:mx-20 bg-slate-200">
                <h1 className="text-2xl mb-5">More about me: </h1>
                <p className="text-lg mb-5 text-justify font-medium tracking-widest">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt fuga perferendis placeat alias facere hic enim animi magni excepturi exercitationem ea, commodi, facilis labore eius. Accusamus tempora neque blanditiis in.
                    Nobis quasi laboriosam ad, doloremque vel aut nostrum laudantium praesentium placeat aliquam ex molestias vero facilis officiis vitae earum accusamus? Eaque voluptatibus nam rem quos temporibus delectus ea corrupti atque?
                    Illum, totam id? Alias, facilis, optio itaque quisquam explicabo neque sapiente asperiores doloremque perspiciatis quam consequuntur similique, labore deserunt illum ad porro aliquam error at consequatur ullam! Ea, facilis et.</p>
                <h1 className="text-2xl mb-5">More about the blog-app project: </h1>
                <p className="text-lg mb-5 text-justify font-medium tracking-widest">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet consequuntur, sunt dolore, quas, cumque inventore animi nisi deleniti quidem maxime nihil quis ex similique rerum officia? Sequi quos nihil rem.
                    Voluptate eos doloribus explicabo reprehenderit culpa natus, modi tempore a quisquam voluptas eaque pariatur nesciunt. Consequuntur officia corrupti eveniet optio atque perspiciatis voluptatem voluptate accusantium, dolor repudiandae excepturi ducimus libero?
                    Ut odio voluptas tenetur repellat quasi distinctio culpa sed eius debitis consectetur accusamus odit autem aperiam, quisquam molestias dolorem, delectus ipsam labore dolores tempore placeat earum cupiditate nemo maiores. Deleniti.</p>
            </div>
        </Boilerplate>
    );
}

export { About };
