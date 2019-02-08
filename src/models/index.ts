import * as cormo from 'cormo';

const connection = new cormo.Connection('mongodb', { database: 'db' });

enum Category {
    Novel,
    Poetry,
    Humanity,
    Essay,
    Travel
}

@cormo.Model({ connection })
export class User extends cormo.BaseModel {
    @cormo.Column(cormo.types.Integer)
    id!: number;

    @cormo.Column(String)
    name!: string;

    @cormo.Column(cormo.types.Integer)
    lateCount?: number;

    @cormo.Column(cormo.types.Date)
    latestLateAt?: Date;

    @cormo.HasMany()
    rentals?: Rental[];
}

@cormo.Model({ connection })
export class Book extends cormo.BaseModel {
    @cormo.Column(cormo.types.Integer)
    id!: number;

    @cormo.Column(String)
    name!: string;

    @cormo.Column(String)
    author?: string;

    @cormo.Column(cormo.types.Integer)
    price?: number;

    @cormo.Column(cormo.types.Date)
    publishAt?: Date;

    @cormo.Column(Object)
    category!: Category;

    @cormo.Column(String)
    locate!: String;

    @cormo.HasMany()
    rentals?: Rental[];
}

@cormo.Model({ connection })
export class Rental extends cormo.BaseModel {
    @cormo.Column(cormo.types.Integer)
    id!: number;

    @cormo.BelongsTo()
    user!: User;

    @cormo.BelongsTo()
    book!: Book;

    @cormo.Column(cormo.types.Date)
    startAt!: Date;

    @cormo.Column(cormo.types.Date)
    endAt!: Date;
}