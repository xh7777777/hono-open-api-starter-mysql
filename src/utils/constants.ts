import { jsonContent } from "stoker/openapi/helpers"
import { z } from "zod"

export const NotFoundSchema = z.object({ error: z.string() })