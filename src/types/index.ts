export type PlayerEntity = {
    id: string;
    name: string;
    surname: string;
    teamId: string;
}

export type PlayerDto = Omit<PlayerEntity, 'id'>