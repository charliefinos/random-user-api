export async function getUsers() {

    const user = await (await fetch("https://randomuser.me/api")).json();

    console.log(user.results);

    return user.results;
}