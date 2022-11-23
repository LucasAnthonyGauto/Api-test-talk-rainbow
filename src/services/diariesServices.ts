import { PostEntry, PostEntryUser, PostReactionsUser } from './types'
import postData from './post.json'

const post: PostEntry[] = postData as PostEntry[]

export const getEntries = (): PostEntry[] => post

export const findById = (id : number): PostEntry | undefined => { 
  const entry = post.find(d => d.id === id)
  return entry
}
const newId = ():number  => {
    let result = Math.max(...post.map(d => d.id)) +1
    if ( result > 0){
      return result;
    }
    return 0;
}

export const addEntries = (PostEntryUser: PostEntryUser) : PostEntry => {
  const newPost =  {
    id : newId(),
    ...PostEntryUser,
    reactions : {
      likes : 0,
      disLike : 0
    }
  }
  post.push(newPost)
  return newPost
}


export const reactionsLike = (object: any): PostEntry => {
  const reactedPost: PostEntry = {
    ...PostReactionsUser,
    reactions:{
      likes : object.likes + 1,
      disLike : object.disLike + 1
    }
  };
  return reactedPost
}

export const reactionsDisLike = (object: any): PostEntry => {
  const reactedPost: PostEntry = {
    id: object.id,
    date: object.date,
    name: object.name,
    comment: object.comment,
    color: object.color,
    reactions:{
      likes : object.likes + 1,
      disLike : object.disLike + 1
    }
  };
  return reactedPost
}