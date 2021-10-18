/**
 * Model of a user.
 */
export class User {

  firstName: string;
  lastName: string;
  email: string;
  institution: string;

  /**
   * Parses a User.
   *
   * @param payload User json payload.
   * @return Parsed User.
   */
  public static deserialize(payload: any): User {
    const user = new User();
    user.firstName = payload.firstName;
    user.lastName = payload.lastName;
    user.email = payload.email;
    user.institution = payload.institution;
    return user;
  }

  /**
   * Marshalls a User.
   *
   * @param user User to marshall.
   * @return Marshalled User.
   */
  public static serialize(user: User): any {
    return {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      institution: user.institution,
    };
  }

}
