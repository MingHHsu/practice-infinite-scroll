import axios from 'axios';
import { Observable } from 'rxjs';

export default ({
  url,
  method = 'get',
  baseURL,
  headers = {},
  data = {},
  params = {},
}) => new Observable(async (observer) => {
  try {
    const res = await axios({
      url,
      method,
      baseURL,
      headers,
      data,
      params,
    });
    observer.next(res);
    observer.complete();
  } catch (error) {
    observer.error(error);
  }
});
