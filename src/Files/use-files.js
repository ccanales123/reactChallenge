import { useEffect, useState } from 'react';
import { getFiles } from '../api';

export function useFiles() {
  const [ files, setFiles ] = useState([]);

  useEffect(() => {
    getFiles()
      .then(files => setFiles(files));
  }, []);

  return files;
}
