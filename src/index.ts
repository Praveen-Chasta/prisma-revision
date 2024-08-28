import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

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


async function getTodoAndUserDetails(userId : number){
    const res = await prisma.todo.findMany({
        where : {
            userId : userId
        },
        select:{
            id              :   true,
            title           :   true,
            description     :   true,
            user            :   true
        }
    })
    console.log(res)
}

getTodoAndUserDetails(1)