using Microsoft.EntityFrameworkCore;
using HomeApp.Models;

namespace HomeApp.DAL
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public virtual DbSet<GroceryItem> GroceryItems { get; set; }
        public virtual DbSet<Recipe> Recipes { get; set; }
    }
}