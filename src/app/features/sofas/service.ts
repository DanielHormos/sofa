import { sofasRepository } from "./repository";

export const sofasService = {
  async add(name: string) {
    sofasRepository.add(name);
  },
};
