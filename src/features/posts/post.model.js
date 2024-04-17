import UserModel from "../users/user.model.js";

export class PostModel {
    constructor(id, userId, caption, imageUrl) {
        this.id = id;
        this.userId = userId;
        this.caption = caption;
        this.imageUrl = imageUrl
    }

    static getAll() {
        return posts
    }

    static getById(id) {
        const isAvailable = posts.filter(p => p.id == id)
        return isAvailable
    }

    static getPostByUser(userId) {
        const userPosts = posts.filter(p => p.userId == userId)
        return userPosts
    }
    
    static createPost (userId, caption, imageUrl) {
        const newPost = new PostModel(
            posts.length + 1,
            userId,
            caption,
            imageUrl
        )
        posts.push(newPost)
        return newPost
    }

    static updatePost (userId, postId, caption, imageUrl) {
        const index = posts.findIndex(p => p.id == postId && p.userId == userId)
        if(index !== -1) {
            const oldData = posts[index]
            posts[index] = { ...posts[index], caption, imageUrl }
            const updatedData = posts[index]

            return {
                "oldPost": oldData,
                "updatedPost": updatedData
            }
        }
        
    }

    static deletePost (postId, userId) {
        const validUser = UserModel.confirmUser(userId)
        if(!validUser) {
            return 'User is not authenticated'
        }
        else {
            const index = posts.findIndex(p => p.id == postId && p.userId == userId)
            if(index !== -1) {
                const deletedPost = posts.splice(index, 1)
                return deletedPost
            }
            return null
        }
    }
}

let posts = [
    new PostModel(
        1,
        1,
        "Flowers",
        "https://images.pexels.com/photos/21705409/pexels-photo-21705409/free-photo-of-a-large-group-of-pink-and-white-flowers.jpeg"
    )
]