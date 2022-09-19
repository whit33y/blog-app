import Boilerplate from "../layouts/Boilerplate";

function AddPost() {
    return (
        <Boilerplate name={'Add post'}>
            <form>
                <p>Title</p>
                <input type='text' name='title' className="border-2"></input>
                <br />
                <p>Text content</p>
                <textarea name='textCont' rows={3} cols={30} className="border-2"></textarea>
                <br />
                <p>Category</p>
                <select className="border-2">
                    <option>it</option>
                    <option>tech</option>
                    <option>lifestyle</option>
                    <option>health</option>
                </select>
                <br />
                <p>Date</p>
                <input type="date" className="border-2" />
            </form>
        </ Boilerplate>
    );
}

export default AddPost;