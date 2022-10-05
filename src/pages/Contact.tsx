import Boilerplate from "../layouts/Boilerplate";
function Contact() {
    return (
        <Boilerplate name={'Contact'}>
            <div className="flex flex-col items-center mt-5">
                <h1 className="text-2xl mb-5">Visit my socials </h1>
                <div className="flex flex-row mb-5">
                    <a href='https://github.com/whit33y'><img className='w-12 h-12 mx-1' src='https://cdn-icons-png.flaticon.com/512/733/733609.png' /></a>
                    <a href='https://twitter.com/kubussbr'><img className='w-12 h-12 mx-1' src='https://cdn-icons-png.flaticon.com/512/733/733635.png' /></a>
                    <a href='https://www.instagram.com/kubuulek/'><img className='w-12 h-12 mx-1' src='https://cdn-icons-png.flaticon.com/512/1384/1384015.png' /></a>
                </div>
                <h1 className="text-2xl mb-5">or contact me via email</h1>
                <p className="text-xl">example@mail.com</p>
            </div>
        </Boilerplate>
    );
}

export default Contact;