import { Category } from '../models/Category';
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from './ICategoriesRepository';

class PostgresCategoriesRepository implements ICategoriesRepository {
  findByName(name: string): Category {
    throw new Error('Method not implemented.');
  }

  listAll(): Category[] {
    throw new Error('Method not implemented.');
  }

  create({ name, description }: ICreateCategoryDTO): void {
    throw new Error('Method not implemented.');
  }
}

export { PostgresCategoriesRepository };
