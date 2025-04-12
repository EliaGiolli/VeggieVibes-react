export interface RecipeSearch {
    id: number;
    title: string;
    image: string;
    imageType: string;
}


export interface RecipeDetails {
    id: number;
    title: string;
    readyInMinutes: number;
    servings: number;
    image: string;
    ingredients:Ingredient[] | null;
}

export interface Ingredient{
    name:string;
    amount:number;
    unit: string;
}