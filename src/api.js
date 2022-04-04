const files = [
  {
    id: 'the-file-id-1',
    versions: [
      { id: 1, name: 'test.txt' },
      { id: 0, name: 'test.txt' },
    ],
  },
  {
    id: 'the-file-id-2',
    versions: [
      { id: 1, name: 'recipes.doc' },
      { id: 0, name: 'recipes.doc' },
    ],
  },
  {
    id: 'the-file-id-3',
    versions: [
      { id: 1, name: 'picture.png' },
      { id: 0, name: 'photo.png' },
    ],
  },
];

export async function getFiles() {
  return files.sort((a, b) => a.versions[0].name > b.versions[0].name ? 1 : -1 );;
}

export async function addFile(name) {
  // TODO: Implement this API to add a new file according to task (5).
  // Resolve
  const newFile = {
    id: `the-file-id-${files.length+1}`,
    versions: [
      { id: 1, name: name },
    ],
  };
  files.push(newFile)
  return files;
}

export async function addVersion(fileId, name) {
  // TODO: Insert the new version on the beginning of the stack according to task (1)  
  // Resolve
  files.map(f => {
    if(f.id === fileId){
      const versionId = f.versions[f.versions.length - 1].id + 1;
      f.versions.unshift({ id: versionId, name });
    }
  })
  return files;

}
