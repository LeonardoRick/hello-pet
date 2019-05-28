import { BasePearson } from '../BasePerson/base-pearson';
export class Caregiver extends BasePearson {
    constructor(
        public id: number,
        public name: string,
        public email: string,
        public passoword: string,

        public mainSpec?: string
    ) {
        super(
            id, name, email, passoword
        );
    }
}
