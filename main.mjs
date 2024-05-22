import { createHashTable } from "./hashTable.mjs";

let hashTable = createHashTable();
hashTable.set("username", "johnDoe");
hashTable.set("password", "123456");
hashTable.set("email", "john@example.com");
hashTable.set("firstName", "John");
hashTable.set("lastName", "Doe");
hashTable.set("city", "New York");
hashTable.set("country", "USA");
hashTable.set("phoneNumber", "555-1234");

hashTable.set("timezone", "EST");
hashTable.set("status", "active");
hashTable.set("role", "admin");
hashTable.set("birthDate", "1990-01-01");
hashTable.set("color", "blue");
hashTable.set("food", "pizza");
hashTable.set("hobby", "reading");
hashTable.set("book", "1984");
hashTable.set("movie", "Inception");

hashTable.remove("password");

hashTable.printHashTableArray();