"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// async function insertUser(username: string, password: string, firstname: string, lastname: string, email: string) {
//     const res = await prisma.user.create({
//       data: {
//         username,
//         password,
//         firstname,
//         lastname,
//         email
//       }
//     });
//     console.log(res);
//   }
//   // Call the function
// insertUser("admin2", "123456789", "hari", "singh", "praveen.chasta@gmail.com")
// async function createTodo(userId: number, title: string, description: string, done: boolean) {
//     const res = await prisma.todo.create({
//         data:{
//             userId,
//             title,
//             description,
//             done
//         }
//     })
// }
// createTodo(1, "play football", "everyday", true);
function getTodoAndUserDetails(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.todo.findMany({
            where: {
                userId: userId
            },
            select: {
                id: true,
                title: true,
                description: true,
                user: true
            }
        });
        console.log(res);
    });
}
getTodoAndUserDetails(1);
