# Migration `20200524153647-create-recipe`

This migration has been generated by Lachlan Campbell at 5/24/2020, 3:36:47 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."Recipe" (
    "createdAt" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" SERIAL,
    "ingredients" text  NOT NULL ,
    "instructions" text  NOT NULL ,
    "isFavorite" boolean  NOT NULL DEFAULT false,
    "notes" text  NOT NULL ,
    "title" text  NOT NULL ,
    PRIMARY KEY ("id")
)
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200524153647-create-recipe
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,18 @@
+datasource postgres {
+  provider = "postgresql"
+  url      = env("DATABASE_URL")
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model Recipe {
+  id           Int      @default(autoincrement()) @id
+  title        String
+  ingredients  String
+  instructions String
+  notes        String
+  isFavorite   Boolean  @default(false)
+  createdAt    DateTime @default(now())
+}
```