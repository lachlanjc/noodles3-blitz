import React, { Suspense } from "react"
import { Head, Link, useQuery } from "blitz"
import getRecipes from "app/recipes/queries/getRecipes"

export const RecipesList: React.FC = () => {
  const [recipes] = useQuery(getRecipes, {})

  return (
    <ul>
      {recipes.map((recipe) => (
        <li key={recipe.id}>
          <Link href="/recipes/[recipeId]" as={`/recipes/${recipe.id}`}>
            <a>{recipe.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

const RecipesPage: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Recipes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Recipes</h1>

        <p>
          <Link href="/recipes/new">
            <a>Create Recipe</a>
          </Link>
        </p>

        <Suspense fallback={<div>Loading…</div>}>
          <RecipesList />
        </Suspense>
      </main>
    </div>
  )
}

export default RecipesPage
