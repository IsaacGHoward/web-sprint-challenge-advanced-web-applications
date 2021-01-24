import {axiosWithAuth} from './axiosWithAuth';

export const getColorsFetch = () => {
  return axiosWithAuth().get('/colors')
  .then(res => {
    console.log(res);
    return res
    //setColorList(res.data); 
  })
}