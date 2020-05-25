import { useState, useEffect } from "react"

const useForm = (
  submitURL = "/",
  options = { clearOnSubmit: 2000, method: "post", extraData: {} }
) => {
  const [status, setStatus] = useState("default")
  const [data, setData] = useState({})
  const [touched, setTouched] = useState({})

  const onFieldChange = (e, name, type) => {
    e.persist()
    const value = type === "checkbox" ? e.target.checked : e.target.value
    setData((data) => ({ ...data, [name]: value }))
  }

  useEffect(() => {
    setTouched(Object.keys(data))
  }, [data])

  const useField = (name, type = "text", ...props) => {
    const checkbox = type === "checkbox" || (type === "text" && name.startsWith("is"))
    const empty = checkbox ? false : ""
    const onChange = (e) => onFieldChange(e, name, type)
    const value = data[name] || empty
    return {
      name,
      id: name,
      type: name === "email" ? "email" : type,
      [checkbox ? "checked" : "value"]: value || empty,
      onChange,
      ...props,
    }
  }

  const { method = "post" } = options
  const action = submitURL

  const formProps = { method, action }

  return { status, data, touched, useField, formProps }
}

export default useForm
