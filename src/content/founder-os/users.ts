export type CourseUser = { email: string; password: string };

// Kurs-Zugänge. password = scrypt-Hash "salt:hash" (NIE Klartext).
// Neuen Kunden anlegen: node scripts/add-user.mjs kunde@mail.de
// Die ausgegebene Zeile hier ins Array einfügen, dann committen + pushen.
export const USERS: CourseUser[] = [
  { email: "karl.jandl@gmx.de", password: "3fd70883cc8e5322f50d4e7ddf704f23:6b775fd0ea6bcec38319a592742d9919208193a046d010b26500e977994ce9a445dfb8433d3b425f8dcea8b27e26b3583f4db263eaee4d18a775503e998cad88" },
];
