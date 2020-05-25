import React, { Suspense } from "react"
import { Head, Link, useRouter, useQuery } from "blitz"
import getRecipe from "app/recipes/queries/getRecipe"
import updateRecipe from "app/recipes/mutations/updateRecipe"
import RecipeForm from "app/recipes/components/RecipeForm"

export const EditRecipe: React.FC = () => {
  const router = useRouter()
  const recipeId = parseInt(router?.query.recipeId as string)
  const [recipe] = useQuery(getRecipe, { where: { id: recipeId } })

  return (
    <div>
      <h1>Edit Recipe {recipe.id}</h1>
      <pre>{JSON.stringify(recipe)}</pre>

      <RecipeForm
        initialValues={recipe}
        onSubmit={async (data) => {
          try {
            const updated = await updateRecipe({
              where: { id: recipe.id },
              data,
            })
            alert("Success!" + JSON.stringify(updated))
            router.push("/recipes/[recipeId]", `/recipes/${updated.id}`)
          } catch (error) {
            console.log(error)
            alert("Error creating recipe " + JSON.stringify(error, null, 2))
          }
        }}
      />
    </div>
  )
}

const EditRecipePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Edit Recipe</title>
      </Head>

      <main>
        <Suspense fallback={<div>Loading…</div>}>
          <EditRecipe />
        </Suspense>

        <p>
          <Link href="/recipes">
            <a>Recipes</a>
          </Link>
        </p>
      </main>
    </>
  )
}

export default EditRecipePage
