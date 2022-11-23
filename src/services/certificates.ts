import { PostEntryUser } from "./types";
import { Color } from "./enums";

// data types

const isSting = (param: any): boolean => {
  return typeof param === "string" || param instanceof String;
};
const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const isColor = (param: any): boolean => {
  return Object.values(Color).includes(param);
};

// parse

const commentParse = (commentReq: any): string => {
  if (isSting(commentReq)) {
    if (commentReq.length < 200) {
      return commentReq;
    }
    throw new Error("maximum characters available 200");
  }
  throw new Error("no is string");
};

const dateParse = (dateReq: any): string => {
  if (!isSting(dateReq) || !isDate(dateReq)) {
    throw new Error("no is date");
  }
  return dateReq;
};

const nameParse = (nameReq: any): string => {
  if (isSting(nameReq)) {
    if (nameReq.length < 20) {
      return nameReq;
    }
    throw new Error("maximum characters available 20");
  }
  throw new Error("not a string");
};

const colorParse = (colorReq: any): string => {
  if (isSting(colorReq)) {
    if (isColor(colorReq)) {
      return colorReq;
    }
    throw new Error("not a color value");
  }
  throw new Error("not a string");
};

const certificatesNewDiaryEntry = (object: any): PostEntryUser => {
  const newEntry: PostEntryUser = {
    date: dateParse(object.date),
    name: nameParse(object.name),
    comment: commentParse(object.comment),
    color: colorParse(object.color),
  };

  return newEntry;
};


export default certificatesNewDiaryEntry;
