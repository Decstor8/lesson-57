export interface User {
    id: string;
    name: string;
    email: string;
    isActive: boolean;
    category: string;
}

export interface DishMutation {
    name: string;
    email: string;
    isActive: boolean;
}