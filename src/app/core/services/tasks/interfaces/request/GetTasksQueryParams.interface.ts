export interface GetTasksQueryParams{
    page?: number;
    limit?: number;
    sort?: string;
    order?: string;
    completed?: boolean;
    createdAt?: string;
    updatedAt?: string;
}