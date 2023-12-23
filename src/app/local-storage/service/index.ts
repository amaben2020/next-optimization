export class LocalStorageService {
  users: Array<{ name: string; email: string }>;
  constructor() {
    this.users = [];
  }
  getUsers() {
    const itemInLocalStorage = localStorage.getItem("users");
    if (itemInLocalStorage) {
      const users = JSON.parse(itemInLocalStorage) ?? [];

      return users ?? [];
    }
  }

  addUser({ name, email }: { name: string; email: string }) {
    const users = this.users;
    if (name && email) {
      const userInfo = {
        email,
        name,
      };

      users.push(userInfo);

      if (typeof localStorage !== "undefined") {
        localStorage.setItem("users", JSON.stringify(users));
      }
    }
  }

  deleteUser(email: string) {
    if (email) {
      const userToRemove = this.users.filter((user) => user.email !== email);

      return localStorage.setItem("users", JSON.stringify(userToRemove));
    }
  }
  updateUser(user: { name: string; email: string }) {
    const userToUpdate = this.users.find(
      (userInfo) => userInfo.email === user.email,
    );

    if (userToUpdate) {
      userToUpdate["email"] = user.email;
      userToUpdate["name"] = user.name;

      this.users.push(userToUpdate);

      localStorage.setItem("users", JSON.stringify(userToUpdate));
    }
  }
}
