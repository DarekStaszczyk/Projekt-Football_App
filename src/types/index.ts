export type PlayerEntity = {
    id: number;
    name: string;
    surname: string;
    teamId: number;
}

export type PlayerDto = Omit<PlayerEntity, 'id'>