import { Sofa } from "./types";
const sofas: Sofa[] = [];

export const sofasRepository = {
  async add(sofaName: string) {
    console.log("adding sofa");

    sofas.push({ sofaName });
  },
};
