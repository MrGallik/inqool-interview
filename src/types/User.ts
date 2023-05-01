export type User = {
    login: string;
    id: number;
    name?: string | null;
    avatar_url: string;
    html_url: string;
    location?: string | null;
    bio?: string | null;
    followers: number;
    following: number;
    created_at: string;
    type: string;
}