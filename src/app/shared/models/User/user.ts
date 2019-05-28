import { BasePearson } from '../BasePerson/base-pearson';
export class User extends BasePearson {
    constructor(
        public id: number,
        public name: string,
        public email: string,
        public passoword: string
    ) {
        super(
            id, name, email, passoword
        );
    }
}
