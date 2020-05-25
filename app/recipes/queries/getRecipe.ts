import db, { FindOneRecipeArgs } from "db"

type GetRecipeInput = {
  where: FindOneRecipeArgs["where"]
}

export default async function getRecipe({ where }: GetRecipeInput) {
  const recipe = await db.recipe.findOne({ where })

  return recipe
}
