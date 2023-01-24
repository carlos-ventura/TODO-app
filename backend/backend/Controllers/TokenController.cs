using backend.Models;
using backend.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers {
    [Route("/auth")]
    [ApiController]
    public class TokenController : ControllerBase {

        private readonly IJwtTokenManager _tokenManager;

        public TokenController(IJwtTokenManager jwtTokenManager) {
            _tokenManager = jwtTokenManager;
        }
        [AllowAnonymous]
        [HttpPost]
        public IActionResult Authenticate([FromBody] User user) {
            var token = _tokenManager.Authenticate(user.Username);
            if(string.IsNullOrEmpty(token))
                return Unauthorized();
            return Ok(token);
        }
    }
}
