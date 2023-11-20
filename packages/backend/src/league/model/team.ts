import { match } from "ts-pattern";
import { z } from "zod";

export type Team = z.infer<typeof TeamSchema>;
export const TeamSchema = z.enum(["red", "blue"]);

export function parseTeam(input: number): Team | undefined {
  return match(input)
    .returnType<Team | undefined>()
    .with(100, () => "red")
    .with(200, () => "blue")
    .otherwise(() => undefined);
}
