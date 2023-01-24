using backend.Models;

namespace backend.Repositories {
    public static class UserRepository {

        static User[] users = new User[]{
                 (new User { Username = "root" }),
                 (new User { Username= "admin"}),
                 (new User { Username= "superuser" })
           };
        public static User? Get(string username) {
            return users.FirstOrDefault(x => x.Username.ToLower() == username.ToLower());
        }
    }
}

