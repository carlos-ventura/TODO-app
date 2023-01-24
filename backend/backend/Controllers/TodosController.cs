using backend.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace backend.Controllers {
    [Authorize]
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

        [HttpGet("{id}")]
        public async Task<ActionResult<Todo>> GetTodo(int id) {
            var todo = await _todoContext.Todos.FindAsync(id);
            if (todo == null)
                return NotFound();
            return todo;
        }

        [HttpPost]
        public async Task<ActionResult<Todo>> PostTodo(Todo todo) {
            _todoContext.Todos.Add(todo);
            await _todoContext.SaveChangesAsync();

            return CreatedAtAction(nameof(PostTodo), new { id = todo.Id }, todo);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Todo>> PutTodo(int id, Todo todo) {
            if (id != todo.Id)
                return BadRequest();

            _todoContext.Entry(todo).State = EntityState.Modified;

            try {
                await _todoContext.SaveChangesAsync();
            } catch (DbUpdateConcurrencyException) {
                if (!TodoExists(id)) {
                    return NotFound();

                } else {
                    throw;
                }
            }
            return todo;
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTodo(int id) {
            var todo = await _todoContext.Todos.FindAsync(id);
            if (todo == null) return NotFound();

            _todoContext.Remove(todo);
            await _todoContext.SaveChangesAsync();

            return NoContent();
        }

        private bool TodoExists(int id) {
            return _todoContext.Todos.Any(todo => todo.Id == id);
        }
    }
}
