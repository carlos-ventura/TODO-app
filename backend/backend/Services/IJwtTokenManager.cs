namespace backend.Services
{
    public interface IJwtTokenManager
    {
        string Authenticate(string username);
    }
}
