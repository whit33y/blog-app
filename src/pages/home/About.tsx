import { Boilerplate } from "../../layouts/Boilerplate";
function About() {
    return (
        <Boilerplate name={'About me and about a project'}>
            <div className="flex flex-col items-center mt-5 sm:mx-0 md:mx-20 bg-slate-200">
                <img src='https://www.svgrepo.com/show/4559/man.svg' className="w-10 h-10 p-2 bg-emerald-500 rounded-3xl" alt='man icon' />
                <h1 className="text-2xl mb-5">More about me: </h1>
                <p className="text-lg mb-5 text-justify font-medium tracking-widest sm:mx-0 md:mx-40">My name is Jackob. I'm 21 years old and I come from Poland. My goal while I was making this project was to learn as much about Typescript and React as I can do. I'm focused on learning as fast as posible
                    while making my projects.</p>
                <img src='https://www.svgrepo.com/show/422049/website.svg' className="w-10 h-10 p-2 bg-emerald-500 rounded-3xl" alt='computer icon' />
                <h1 className="text-2xl mb-5">More about the blog-app project: </h1>
                <p className="text-lg mb-5 text-justify font-medium tracking-widest sm:mx-0 md:mx-40">This projects includes React, Typescript, Supabase, Html, Js, Css, Tailwind. Photos, fonts, icons are from: unsplash, google fonts/icons, svgrepo.  It took me few weeks to done it. While I was making this project
                    I was focused on learning as much as I possibly can. Project includes view for desktops and also smartphones. Fell free to share feedback with me via Github/Twitter/Instagram and ask me questions if you have any. </p>
            </div>
        </Boilerplate>
    );
}

export { About };
