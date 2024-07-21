import {ResponseData} from '../types/commonTypes';

export interface NetworkResponse {
  data: {
    userHolding: ResponseData[];
  };
}
