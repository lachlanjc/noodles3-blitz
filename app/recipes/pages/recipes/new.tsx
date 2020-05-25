import React from "react"
import { Head, Link, useRouter } from "blitz"
import createRecipe from "app/recipes/mutations/createRecipe"
import RecipeForm from "app/recipes/components/RecipeForm"

const NewRecipePage: React.FC = () => {
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>New Recipe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Create New Recipe </h1>

        <RecipeForm
          initialValues={{}}
          onSubmit={async (data) => {
            try {
              const recipe = await createRecipe({ data })
              alert("Success!" + JSON.stringify(recipe))
              router.push("/recipes/[recipeId]", `/recipes/${recipe.id}`)
            } catch (error) {
              alert("Error creating recipe " + JSON.stringify(error, null, 2))
            }
          }}
        />

        <p>
          {
            <Link href="/recipes">
              <a>Recipes</a>
            </Link>
          }
        </p>
      </main>
    </div>
  )
}

export default NewRecipePage
