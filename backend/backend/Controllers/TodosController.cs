using backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace backend.Controllers {
    [Route("/tasks")]
    [ApiController]
    public class TodosController : ControllerBase {

        private readonly TodoContext _todoContext;

        public TodosController(TodoContext todoContext) {
            _todoContext = todoContext;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Todo>>> GetTodos() {
            return await _todoContext.Todos.ToListAsync();
        }
    }
}
