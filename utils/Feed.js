import Box from "3box";

export function test() {
  return { test: "hello" };
}

const SPACE_APP = "fame";

export function getNewVideos() {
  const s = Box.getSpace(
    "0xffaDc07f1BFb127F4312e8652fE94aB0c771b54D",
    SPACE_APP
  );

  return s.public.all().videos || [];
}

// const box = await Box.create(window.ethereum);

export class Feed {
  constructor(box) {
    this.box = box;
  }

  async init() {
    this.box.openSpace(SPACE_APP);
    this.space = await this.box.openSpace(SPACE_APP);
    return this.space;
  }

  async save() {
    await this.space.public.set("hello", "world");

    const d = await this.space.public.get("hello");
    console.log("data get:", d);
  }
}
