import { UserType } from './types';
const human = require('humanparser');

export function formatName(user: UserType): string {
    const parsedName = human.parseName(user.name);

    // Create an array of name parts
    const lastNameParts = [
        parsedName.lastName,
        parsedName.suffix
    ].filter(Boolean);

    const firstNameParts = [
        parsedName.firstName,
        parsedName.salutation ? `(${parsedName.salutation})` : null
    ].filter(Boolean);


    // Join the parts with a space
    const lastName = lastNameParts.join(' ');
    const firstName = firstNameParts.join(' ');
    return [lastName, firstName].filter(Boolean).join(', ');
};

let idCounter = 0;

export function generateUniqueId() {
  idCounter += 1;
  return `unique-id-${idCounter}`;
}