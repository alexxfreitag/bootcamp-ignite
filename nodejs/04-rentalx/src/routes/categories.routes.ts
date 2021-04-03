import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';

const categoriesRoutes = Router();

const categories = [];

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  const newCategory = {
    id: uuidv4(),
    name,
    description,
    created_at: new Date(),
  };

  categories.push(newCategory);

  return response.status(201).send();
});

export { categoriesRoutes };
