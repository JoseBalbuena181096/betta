console.log("Hello, TypeScript")

const user = {
    id:1,
    name: "John",
    email: "john@gmai.com"
}

type User = {
    id: number;
    name: string;
    email: string;
}

function getUser(id: number, users: User[]): User | undefined {
    console.log(users);
    return users.find(user => user.id === id)!;
}

/**
 STAGING AREA
 Es la parte intermedia entre tener los ficheros pero aun no hecho nada con ellos, en una carpeta temporal
 si quiero registrar estos cambios guardar una foto de este proyecto, una version en el historial del proyecto se realiza un git commit
 
 para crear una nueva branch
 git checkout -b branchname
 
 crear la branch en remoto
 git push --set-upstream origin branchname
 */
console.log("Hola TypeScript");

 