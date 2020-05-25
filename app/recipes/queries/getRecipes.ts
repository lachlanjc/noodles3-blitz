import db, { FindManyRecipeArgs } from "db"

type GetRecipesInput = {
  where: FindManyRecipeArgs["where"]
  orderBy?: FindManyRecipeArgs["orderBy"]
  skip?: FindManyRecipeArgs["skip"]
  after?: FindManyRecipeArgs["after"]
  before?: FindManyRecipeArgs["before"]
  first?: FindManyRecipeArgs["first"]
  last?: FindManyRecipeArgs["last"]
}

export default async function getRecipes({
  where,
  orderBy,
  skip,
  after,
  before,
  first,
  last,
}: GetRecipesInput) {
  const recipes = await db.recipe.findMany({
    where,
    orderBy,
    skip,
    after,
    before,
    first,
    last,
  })

  return recipes
}
