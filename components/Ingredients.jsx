import * as React from 'react';
import { Ingredient } from '../types';

export function IngredientTag({ name }) {
  return (
    <div className="gap-2 self-stretch px-1 sm:px-6 py-1 sm:py-2 border border-black border-solid rounded-[80px] max-md:px-5 font-A">
      {name}
    </div>
  );
}