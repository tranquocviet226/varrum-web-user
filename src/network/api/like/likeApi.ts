import instance from '../../intercepter'

class LikeApis {
  like = (forumId: string) =>
    instance.post('likes', {
      forum_id: forumId
    })
}

export const LikeApi = new LikeApis()
