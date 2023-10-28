export interface Platform{
    id:number;
    name:string;
    slug:string
}

import useData from './useData';

const usePlatforms = () =>useData("/platforms")
  


export default usePlatforms;