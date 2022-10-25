import { Boilerplate } from "../../layouts/Boilerplate";
function Contact() {
    return (
        <Boilerplate name={'Contact'}>
            <div className="flex flex-col items-center mt-5 bg-gray-100">
                <h1 className="text-2xl mb-5 text-sky-900">Visit my socials </h1>
                <div className="flex flex-row mb-5">
                    <a href='https://github.com/whit33y'><img className='w-12 h-12 mx-2' src='https://cdn-icons-png.flaticon.com/512/733/733609.png' alt='github' /></a>
                    <a href='https://twitter.com/kubussbr'><img className='w-12 h-12 mx-2' src='https://cdn-icons-png.flaticon.com/512/733/733635.png' alt='twitter' /></a>
                    <a href='https://www.instagram.com/kubuulek/'><img className='w-12 h-12 mx-2' src='https://cdn-icons-png.flaticon.com/512/1384/1384015.png' alt='instagram' /></a>
                </div>
                <div className="mb-5 text-center text-sky-900">
                    <h1 className="text-2xl">or contact me via email</h1>
                    <p className="text-xl mb-5">example@mail.com</p>
                </div>
                <div className="flex flex-col items-center text-center mb-5 text-sky-900">
                    <h1 className="text-2xl">also you can add me on discord</h1>
                    <img className='w-12 h-12 mx-2' src='https://cdn-icons-png.flaticon.com/512/5968/5968898.png' alt='discord' />
                    <p className="text-xl mb-5">kubuulek#0982</p>
                </div>
            </div>
        </Boilerplate>
    );
};

export { Contact };