import { z } from "zod"
import { movieSchema, returnMovieSchema, returnAllMoviesSchema } from "../schemas/movies.schemas"

export type iMovie = z.infer<typeof movieSchema>

export type iMovieResult = z.infer<typeof returnMovieSchema>

export type iAllMoviesResult = z.infer<typeof returnAllMoviesSchema>