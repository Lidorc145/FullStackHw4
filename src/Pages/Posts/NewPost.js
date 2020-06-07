import React from "react";

function NewPost() {
    return(
        <div>
            <article className="mainColumn">
            <form>
                <div className="form-group">
                    <label><h1>Create new post:</h1></label>
                    <input type="text" className="form-control" placeholder="Post title goes here.." />
                </div>
                <div className="form-group">
                    <textarea type="text" className="form-control" rows="15" placeholder="Post content goes here..." />
                </div>
                <div className="form-group">
                    <label>Tags</label>
                     <input type="text" className="form-control" placeholder="Separate tags with commas, for example: Dogs, Animals, Wheater.." />
                </div>
                <button type="submit" className="btn btn-primary">Save post</button>
            </form>
            </article>
        </div>
    );
}

export default NewPost;