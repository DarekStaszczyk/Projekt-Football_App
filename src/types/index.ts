export type PlayerEntity = {
    id: string;
    name: string;
    surname: string;
    teamId: number;
}

export type PlayerDto = Omit<PlayerEntity, 'id'>