"use server";

import { revalidatePath } from "next/cache";

const sofasService = {
  async add(name: string) {
    console.log(name);
  },
};

export async function addSofaAction(sofaName: string) {
  sofasService.add(sofaName);

  revalidatePath("/");
}
