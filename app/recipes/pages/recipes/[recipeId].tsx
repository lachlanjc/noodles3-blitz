import React, { Suspense } from "react"
import { Head, Link, useRouter, useQuery } from "blitz"
import getRecipe from "app/recipes/queries/getRecipe"
import deleteRecipe from "app/recipes/mutations/deleteRecipe"

export const Recipe: React.FC = () => {
  const router = useRouter()
  const recipeId = parseInt(router?.query.recipeId as string)
  const [recipe] = useQuery(getRecipe, { where: { id: recipeId } })

  return (
    <div>
      <h1>{recipe.title}</h1>
      <pre>{JSON.stringify(recipe, null, 2)}</pre>

      <Link href="/recipes/[recipeId]/edit" as={`/recipes/${recipe.id}/edit`} passHref>
        <button>Edit</button>
      </Link>

      <button
        type="button"
        onClick={async () => {
          if (window.confirm("This will be deleted")) {
            await deleteRecipe({ where: { id: recipe.id } })
            router.push("/recipes")
          }
        }}
      >
        Delete
      </button>
    </div>
  )
}

const ShowRecipePage: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Recipe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p>
          {
            <Link href="/recipes">
              <a>Recipes</a>
            </Link>
          }
        </p>

        <Suspense fallback={<div>Loading…</div>}>
          <Recipe />
        </Suspense>
      </main>
    </div>
  )
}

export default ShowRecipePage
