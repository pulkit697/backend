exports.getPosts = (req,res,next) => {
    console.log('someone came...')
    res.status(200).json({
        posts: [
            {
                title: 'First Post',
                content: 'This is the first post, already built by me'
            }
        ]
    });
};
exports.postPosts = (req,res,next) => {
    console.log('someone posting...')
    console.log(req.body);
    const title = req.body.title;
    const content = req.body.content;
    console.log("data posted: ", title,content);
    res.status(201).json({
        title: 'Success',
        content: 'Post posted successfully'
    })
}