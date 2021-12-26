namespace HomeApp.Models
{
    public class GroceryItem : BaseEntity
    {
        public string Name { get; set; }
        public string? Description { get; set; }
        public string? Comment { get; set; }
        public int Quantity { get; set; }
        public ICollection<Recipe> Recipes { get; set; }
    }
}