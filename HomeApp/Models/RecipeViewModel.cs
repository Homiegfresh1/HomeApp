namespace HomeApp.Models
{
    public class RecipeViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string? Description { get; set; }
        public string? Comment { get; set; }
        public List<GroceryItemViewModel> Ingredients { get; set; } = new List<GroceryItemViewModel>();

        public RecipeViewModel(Recipe recipe)
        {
            Id = recipe.Id;
            Name = recipe.Name;
            Description = recipe.Description;
            Comment = recipe.Comment;

            if (recipe.GroceryItems?.Any() ?? false)
            {
                foreach (var item in recipe.GroceryItems)
                {
                    Ingredients.Add(new GroceryItemViewModel(item));
                }
            }
        }
    }
}
