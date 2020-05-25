import db, { RecipeUpdateArgs } from "db"

type UpdateRecipeInput = {
  where: RecipeUpdateArgs["where"]
  data: RecipeUpdateArgs["data"]
}

export default async function updateRecipe({ where, data }: UpdateRecipeInput) {
  // Don't allow updating
  delete data.id

  const recipe = await db.recipe.update({ where, data })

  return recipe
}
