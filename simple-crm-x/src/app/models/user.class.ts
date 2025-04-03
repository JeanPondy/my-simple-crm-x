export class User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    birthDate: number;
    street: string;
    zipCode: number;
    city: string;
    country: string;

    constructor(obj?: any, docId?: string) {
        this.id = docId || '';  // Setzt die ID explizit von Firestore
        this.firstName = obj?.firstName || '';
        this.lastName = obj?.lastName || '';
        this.email = obj?.email || '';
        this.birthDate = obj?.birthDate || '';
        this.street = obj?.street || '';
        this.zipCode = obj?.zipCode || '';
        this.city = obj?.city || '';
        this.country = obj?.country || '';
    }

    toJSON() {
        return {
            id: this.id,
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            birthDate: this.birthDate,
            street: this.street,
            zipCode: this.zipCode,
            city: this.city,
            country: this.country
        };
    }
}
