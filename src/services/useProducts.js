import {useQuery} from '@tanstack/react-query';
import {API} from 'constants';
import {useAxios} from 'hooks';

export function products(axiosInstance) {
  return axiosInstance
    .get(API.PRODUCTS)
    .then((res) => res.data);
}

export default function useProducts(props){
  const {api: axiosInstance} = useAxios();

  return useQuery(
    ['useProducts'],
    () => products(axiosInstance),
    props
  );
}
