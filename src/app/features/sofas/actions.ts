"use server";

import { revalidatePath } from "next/cache";
import { sofasService } from "./service";

export async function addSofaAction(sofaName: string) {
  sofasService.add(sofaName);

  revalidatePath("/");
}
