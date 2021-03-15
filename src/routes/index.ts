import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => {
  let a;
  a = 2;
  return response.json({
    message:
        'Helloasdasdasdasda1231231231231assssssssssssssssssssssss111435453434234234sdasd',
  });
});
export default routes;
