using HomeApp.DAL;
using Microsoft.AspNetCore.Mvc;

namespace HomeApp.Web.Controllers
{
    public class RecipeController : BaseController
    {
        public RecipeController(ApplicationDbContext ctx) : base(ctx) {}

        public IActionResult Read()
        {
            var data = ctx.Recipes.AsQueryable();
            return Json(data);
        }
    }
}
