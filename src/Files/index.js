import React, {useState, useEffect} from 'react';

import { useFiles } from './use-files';
import { addFile, addVersion } from '../api';

import styles from './index.module.css';

// TODO: Improve the implementation of this component according to task (4)
// Resolve
function File({ file, handleRename }) {

  const onRename = () => {
    const newName = window.prompt('Rename this file');
    if(newName) {
      handleRename(file.id, newName);
    }
  }

  return (
    <div className={styles.file}>
      <strong>{file.versions[0].name}</strong>
      <button onClick={onRename}>Rename</button>
      <ul>
        { file.versions.map((version,index) => (
          <li key={`${version.id}_v_${index}`}>
            { version.name }
          </li>
        )) }
      </ul>
    </div>
  );
}

export default function Files() {
  // TODO: Replace this polling-like implementation according to task (2)
  // Resolve
  const files = useFiles();
  const [ state, setState ] = useState(files);
  const [sort, setSort] = useState('des');

  useEffect(()=>{
    setState(files);
  },[files])

  const handleAddVersion = (id, newName) => {
    addVersion(id, newName).then(files=>{
      setState(JSON.parse(JSON.stringify(files)));
    });
  }

  const handleSort = () => {
    if(sort === 'asc'){
      state.sort((a, b) => a.versions[0].name > b.versions[0].name ? 1 : -1 );
      setSort('des')
    } else {
      state.sort((a, b) => a.versions[0].name < b.versions[0].name ? 1 : -1 );
      setSort('asc')
    }
  }
  
  const handleAddFile = () => {
    const newFileName = window.prompt('Add new file');
    if(newFileName){      
      addFile(newFileName).then(files=>{
        setState(JSON.parse(JSON.stringify(files)));
      });
    }
  }


  return (
    <>
      {/* TODO: Implement sort feature according to task (3) 
          Resolve
      */}

      <button onClick={handleSort}>Sort A-Z/Z-A</button>
      {
        state.map(file => <File file={file} key={file.id} handleRename={handleAddVersion} />)
      }
      {/* TODO: Add a button to add a new file according to task (5) 
          Resolve
      */}
      <button onClick={handleAddFile}>Add File</button>

    </>
  );
}
