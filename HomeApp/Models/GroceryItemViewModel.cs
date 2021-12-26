namespace HomeApp.Models
{
    public class GroceryItemViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Quantity { get; set; }
        public string Comment { get; set; }
        public string Description { get; set; }
        public List<RecipeViewModel> Recipes { get; set; } = new List<RecipeViewModel>();

        public GroceryItemViewModel(GroceryItem item)
        {
            Id = item.Id;
            Name = item.Name;
            Quantity = item.Quantity;
            Comment = item.Comment;
            Description = item.Description;

            // If the item has any recipes
            if (item.Recipes?.Any() ?? false)
            {
                foreach (var recipe in item.Recipes)
                {
                    Recipes.Add(new RecipeViewModel(recipe));
                }
            }
        }
    }
}
