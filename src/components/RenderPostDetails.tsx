import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { useGetPostDetails } from '../hooks/useGetPost';
import { Link } from "react-router-dom";
function RenderPostDetails() {
    const { id } = useParams();
    const getPost = useGetPostDetails(id)
    const query = useQuery(['postDetails', id], () => getPost)
    return (
        <div className='bg-slate-200 '>
            {query.isLoading ? <p className='text-2xl'>Loading ...</p> : query.isError ? <p className='text-2xl'>Error! </p> : query.data ? (
                <div className='flex flex-col sm:mx-0 md:mx-20'>
                    <img className='object-scale-down h-80 w-auto bg-slate-200 ' src={query.data?.image} alt='Post main' />
                    <div>
                        <Link to='/' className="border-2 border-black px-2 bg-emerald-400 hover:text-emerald-400 hover:bg-black duration-300 sm:mb-2 sm:ml-2 md:mb-4 " >Back </Link>
                        <h1 className='text-3xl'>{query.data?.title}<span className="text-lg text-neutral-800"><br />Category: {query.data?.category}</span></h1>
                        <p className='text-lg text-justify font-medium tracking-widest'>{query.data?.description}</p>
                    </div>
                </div>)
                : null
            }
        </div>
    );
}

export { RenderPostDetails };