import React from "react"
import useForm from "app/util/useForm"

type RecipeFormProps = {
  initialValues: any
  onSubmit: (data: any) => any
}

const RecipeForm: React.FC<RecipeFormProps> = ({ initialValues, onSubmit }) => {
  const { data, useField } = useForm("")
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        onSubmit(data)
      }}
    >
      <label>
        Title
        <input {...useField("title")} />
      </label>
      <label>
        Ingredients
        <textarea {...useField("ingredients")} />
      </label>
      <label>
        Instructions
        <textarea {...useField("instructions")} />
      </label>
      <label>
        Notes
        <textarea {...useField("notes")} />
      </label>
      <label>
        Favorite
        <input {...useField("isFavorite", "checkbox")} />
      </label>
      <button>Submit</button>
    </form>
  )
}

export default RecipeForm
