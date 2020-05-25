import db, { RecipeCreateArgs } from "db"

type CreateRecipeInput = {
  data: RecipeCreateArgs["data"]
}
export default async function createRecipe({ data }: CreateRecipeInput) {
  const recipe = await db.recipe.create({ data })

  return recipe
}
