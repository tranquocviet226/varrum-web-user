import instance from "../../intercepter"

class PostApi {
    getListPost = (request) =>
        instance.get('posts', {
            params: request
        })

}

export const UsersApi = new PostApi()