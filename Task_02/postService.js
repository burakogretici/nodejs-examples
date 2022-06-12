const Post = require('./post.js');

const post=new Post(1,"Yazılım","SOLİD","Burak Öğretici");
const post1=new Post(2,"Edebiyat","Tanzimat","Hamdi Durusoy");
const post2=new Post(3,"Yapay Zeka","Denetimsiz Öğrenme","Falan filen");

const posts =[post,post1,post2];

const listAllPost = (items) => {
    return new Promise((resolve,reject) => {
    	if (items) {
    		items.forEach((post) => {
            	console.log(post)
        	})
        	resolve('Postlar listelendi!')
    	}
        reject('Postlar listelenirken bir hata olustu!')
    })
}

const addPost = (newPost) => 
{
    return new Promise((resolve, reject) => 
        {
            console.log('New post has been adding...');
            
            if(newPost)
            {
                posts.push(newPost);
                resolve('New post has been added successfully !');
            }
            else
                reject('New post cannot be added !');
        }) 
}
const process = async () =>
{
    try 
    {
        let listAllPost = await listAllPost(posts);
        console.log(listAllPost);

        let add_post = await addPost(new Post(4,"Kimya","Molekül","Fatih Öğretici"));
        console.log(add_post);

        let listAllPost1 = await listAllPost(posts);
        console.log(listAllPost1);
    } 
    catch (error) 
    {
        console.error(error);
    }
}

process();