import { Color } from "./enums"

export interface PostEntry {
  id: number,
  date: string,
  name: string,
  comment: string,
  color: Color,
  reactions:{
    likes :number
    disLike : number
  }
}

export type PostEntryUser = Omit.PostEntry[{"id", "reactions"}]
export type PostReactionsUser = Omit.PostEntry[{"reactions"}]