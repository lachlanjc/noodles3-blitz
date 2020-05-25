import { Head, Link } from "blitz"

const modelSnippet = `model Project {
  id      Int      @default(autoincrement()) @id
  name    String
}`

const migrateSnippet = `$ blitz db migrate
$ blitz generate all project`

const Home = () => (
  <main style={{ padding: "2rem 1rem" }}>
    <Head>
      <title>Noodles 3</title>
    </Head>
    <h1>Noodles 3</h1>
    <p>Keep, cook, & share your favorite recipes. Now built with Blitz.</p>
    <p>
      <Link href="/recipes">
        <a>Open Recipes</a>
      </Link>
    </p>
  </main>
)

export default Home
