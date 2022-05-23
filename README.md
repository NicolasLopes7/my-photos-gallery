## my photos gallery

this project was created to test some frontend techs and improve my styling skills. some of the techs. 💫
we'll be using:

- next.js
- typescript
- graphQL
- relay
- stitiches
- radix
- monorepo
- graphQL-helix
- prisma
- react-native

### what we want to turn into with this project

the art state of this project will be a monorepo with:

- web front-end (to view the photos)
- mobile app (to manage the photos)
- graphQL API (to handle everything)

How does the data moddeling would work?

```ts
enum FileType {
    PHOTO
    FOLDER
}
type File = {
  id: ID;
  type: FileType;
  label?: string;
  parent_id?: ID;
  children: File[] | never[];
  style: CSS<{}, DefaultThemeMap>; // this should be directy exported from stitches
  metadata: Record<string, unknown>
}
```

Basically every file can have an parent_id, if they have. this will be associated with a folder above.

> But Nicolas, this will be bad to index on the DB, you will make slow queries to get to know the photos of an given folder?

No, my friend...No...We have a such magical thing that's called `index` 💫. We can create a composite partial index between the parent_id and the type to index the photos much faster as we can. For example this will crete a composite partial index:

```sql
CREATE INDEX CONCURRENTLY IF NOT EXISTS
ix_file_photo_parent_id ON "file"
USING btree (type, parent_id)
WHERE type = 'PHOTO';

CREATE INDEX CONCURRENTLY IF NOT EXISTS
ix_file_folder_parent_id ON "file"
USING btree (type, parent_id)
WHERE type = 'FOLDER';
```
