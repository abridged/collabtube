import Box from "3box";

export function test() {
  return { test: "hello" };
}

export function getNewVideos() {
  const s = Box.getSpace("0xffaDc07f1BFb127F4312e8652fE94aB0c771b54D", "fame");

  return s.public.all().videos || [];
}

const SPACE_APP = "fame";

export class Feed {
  constructor() {
    this.box = await Box.create(window.ethereum);
    this.space = await this.box.openSpace(SPACE_APP);
  }

  test() {
      this.space.public.set('hello', 'world');
  }
}
