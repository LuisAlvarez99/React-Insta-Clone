
const FeedPost = (props) => {
    return(
    <>
        <div className="card">
            <div className="card-body row">
                <img style={{height: '50px', width: '50px'}} src={require('./static/genMan.jpg')} alt=""/>
                <p className="card-title col">{props.name}</p>
                <p className="card-text col">{props.posted}</p>
                {/* <div className="col-2">
                    <ul>
                        <li>Modal pop up</li>
                    </ul>
                </div> */}
            </div>
            <img src={require('./static/genMan.jpg')} className="img-thumbnail" style={{width:'200px', height: '200px'}} alt=""/>
            <div className="d-grid gap-2 d-md-block">
            {/* <div className="list-group list-group-flush row"> */}
                <button className='btn btn-outline-secondary '>
                    <i class="bi bi-airplane-fill"></i>
                </button>
                <button className='btn btn-outline-secondary '>
                    <i class="bi bi-airplane-fill"></i>
                </button>
                <button className='btn btn-outline-secondary '>
                    <i class="bi bi-airplane-fill"></i>
                </button>
                <span className='justify-content-md-end'>
                    <button className='btn btn-outline-secondary '>
                        <i class="bi bi-airplane-fill"></i>
                    </button>
                </span>
            </div>
            {/* <div className="row">LikeCount|Name+Caption|commentModal|addComment</div> */}
        </div>
        <hr/>
    </>
    )
};

export default FeedPost;