exports.getPosts = (req,res,next) => {
    console.log('someone came...')
    res.status(200).json({
        posts: [
            {
                creator:{
                    name: 'Pulkit'
                },
                createdAt : new Date(),
                imageUrl: 'images/Yellow_Duck.jpg'
                ,
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
        message: 'post created successfully',
        post : {
            title: title,
            content: content,
            _id:new Date().toISOString(),
            creator: {
                name: 'v hwlsdv c'
            },
            createdAt: new Date()
        }
    })
}