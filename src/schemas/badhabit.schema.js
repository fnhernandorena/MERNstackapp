import { z } from "zod";

export const createBadHabitSchema = z.object({
    title: z.string({ required_error: 'Title is required' }),
    times: z.array(z.number().int()).optional(),
    date: z.string().datetime().optional(),

})