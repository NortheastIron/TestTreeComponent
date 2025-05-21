export type TDataBase<T extends object = {}> = {
    id: number;
    title: string;
    is_deleted: boolean;
    children: TDataBase<T>[];
} & T;