using HomeApp.DAL;
using Microsoft.AspNetCore.Mvc;
using HomeApp.Models;

namespace HomeApp.Web.Controllers
{
    public class GroceryController : BaseController
    {
        public GroceryController(ApplicationDbContext ctx) : base(ctx) {}

        public IActionResult Read(int? recipeId)
        {
            var data = ctx.GroceryItems.AsQueryable();
            if (recipeId != null)
            {
                //data = data.Where(x => x.re)
            }
            return Json(data);
        }

        public ActionResult Delete(int id)
        {
            var item = ctx.GroceryItems.Find(id);
            if (item != null)
            {
                item.RecordStatus = true;
                ctx.SaveChanges();
                return Json(new GroceryItemViewModel(item));
            }

            throw new ArgumentException("No id provided");
        }
    }
}
