using System;
using System.Collections.Generic;

namespace HomeApp.Models
{
    public class Recipe : BaseEntity
    {
        public string Name { get; set; }
        public string? Description { get; set; }
        public string Comment { get; set; }
        public ICollection<GroceryItem> GroceryItems { get; set; }
    }
}
