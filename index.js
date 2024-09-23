// Praticando CRUD em JavaScript

const FacePoket = {
    usuarios: [
        {
            username: 'junior',
        }
    ],
    post: [
        {
            id: 1,
            owner: 'junior',
            content: 'Primeira postagem'
        }
    ],
};
// CREATE
function createPost(dados) {
    FacePoket.post.push({
        id: FacePoket.post.length + 1,
        owner: dados.owner,
        content: dados.content
    });
}
createPost({ owner: 'junior', content: 'Segundo post'});
//console.log(FacePoket.post)
// READ
function catchPost(){
    return FacePoket.post;
}
//console.log(catchPost()) 

// UPDATE
function updateContentPost(id, newContent) {
    const postUpdate = catchPost().find((post) => {
        return post.id === id;
    });
    //console.log(postUpdate)
    postUpdate.content = newContent

}
updateContentPost(1, 'Novo conteúdo adicionado no post')
//console.log(catchPost())

// DELETE

function deletePost(id) {
    const updatedPostList = catchPost().filter((postCurrent) =>{
        return postCurrent.id!== id;
    })
    FacePoket.post = updatedPostList;
}

deletePost(2)
console.log(catchPost());