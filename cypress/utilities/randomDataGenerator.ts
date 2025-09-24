export interface UserRegistrationData {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phoneNumber: string;
  ssn: string;
  username: string;
  password: string;
  confirmPassword: string;
}

export class RandomDataGenerator {
  
  private static firstNames = [
    'John', 'Jane', 'Michael', 'Sarah', 'David', 'Emily', 'Robert', 'Jessica',
    'William', 'Ashley', 'James', 'Amanda', 'Christopher', 'Melissa', 'Matthew',
    'Jennifer', 'Anthony', 'Michelle', 'Mark', 'Nicole', 'Donald', 'Lisa',
    'Steven', 'Angela', 'Andrew', 'Heather', 'Joshua', 'Brenda', 'Kenneth',
    'Emma', 'Paul', 'Olivia', 'Daniel', 'Cynthia', 'Brian', 'Amy'
  ];

  private static lastNames = [
    'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller',
    'Davis', 'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez',
    'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin',
    'Lee', 'Perez', 'Thompson', 'White', 'Harris', 'Sanchez', 'Clark',
    'Ramirez', 'Lewis', 'Robinson', 'Walker', 'Young', 'Allen', 'King'
  ];

  private static streetNames = [
    'Main St', 'Oak Ave', 'Pine St', 'Maple Dr', 'Cedar Ln', 'Elm St',
    'Park Ave', 'Washington St', 'Lake Dr', 'Hill Rd', 'Church St',
    'School St', 'Center St', 'High St', 'Spring St', 'Mill Rd'
  ];

  private static cities = [
    'Springfield', 'Franklin', 'Greenville', 'Bristol', 'Clinton', 'Fairview',
    'Georgetown', 'Madison', 'Marion', 'Salem', 'Arlington', 'Auburn',
    'Clayton', 'Dayton', 'Jackson', 'Kingston', 'Lebanon', 'Manchester',
    'Newport', 'Oxford', 'Princeton', 'Richmond', 'Riverside', 'Troy'
  ];

  private static states = [
    'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
    'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
    'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
    'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
    'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
  ];

  private static getRandomElement<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
  }

  private static getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private static generateRandomString(length: number, includeNumbers: boolean = true): string {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const chars = includeNumbers ? letters + numbers : letters;
    
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  static generateFirstName(): string {
    return this.getRandomElement(this.firstNames);
  }

  static generateLastName(): string {
    return this.getRandomElement(this.lastNames);
  }

  static generateAddress(): string {
    const streetNumber = this.getRandomNumber(100, 9999);
    const streetName = this.getRandomElement(this.streetNames);
    return `${streetNumber} ${streetName}`;
  }

  static generateCity(): string {
    return this.getRandomElement(this.cities);
  }

  static generateState(): string {
    return this.getRandomElement(this.states);
  }

  static generateZipCode(): string {
    return this.getRandomNumber(10000, 99999).toString();
  }

  static generatePhoneNumber(): string {
    const areaCode = this.getRandomNumber(200, 999);
    const exchange = this.getRandomNumber(200, 999);
    const number = this.getRandomNumber(1000, 9999);
    return `${areaCode}-${exchange}-${number}`;
  }

  static generateSSN(): string {
    const area = this.getRandomNumber(100, 999);
    const group = this.getRandomNumber(10, 99);
    const serial = this.getRandomNumber(1000, 9999);
    return `${area}-${group}-${serial}`;
  }

  static generateUsername(): string {
    const firstName = this.generateFirstName().toLowerCase();
    const randomNumber = this.getRandomNumber(100, 999);
    return `${firstName}${randomNumber}`;
  }

  static generatePassword(): string {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    
    let password = '';
    
    // Ensure at least one character from each category
    password += this.getRandomElement(uppercase.split(''));
    password += this.getRandomElement(lowercase.split(''));
    password += this.getRandomElement(numbers.split(''));
    password += this.getRandomElement(symbols.split(''));
    
    // Fill the rest randomly (total length 8-12)
    const allChars = uppercase + lowercase + numbers + symbols;
    const totalLength = this.getRandomNumber(8, 12);
    
    for (let i = password.length; i < totalLength; i++) {
      password += this.getRandomElement(allChars.split(''));
    }
    
    // Shuffle the password
    return password.split('').sort(() => Math.random() - 0.5).join('');
  }

  static generateCompleteUserData(): UserRegistrationData {
    const password = this.generatePassword();
    
    return {
      firstName: this.generateFirstName(),
      lastName: this.generateLastName(),
      address: this.generateAddress(),
      city: this.generateCity(),
      state: this.generateState(),
      zipCode: this.generateZipCode(),
      phoneNumber: this.generatePhoneNumber(),
      ssn: this.generateSSN(),
      username: this.generateUsername(),
      password: password,
      confirmPassword: password // Same as password for confirmation
    };
  }

  static generateTestUserData(count: number = 1): UserRegistrationData[] {
    const users: UserRegistrationData[] = [];
    for (let i = 0; i < count; i++) {
      users.push(this.generateCompleteUserData());
    }
    return users;
  }
}
