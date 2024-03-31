import { z } from "zod";

export const createTrainingSchema = z.object({
    description: z.string({ required_error: 'Description is required' }),
    chest:  z.boolean(),
    back:  z.boolean(),
    legs:  z.boolean(),
    biceps:  z.boolean(),
    triceps:  z.boolean(),
    shoulders:  z.boolean(),
    date: z.string().datetime().optional(),

})