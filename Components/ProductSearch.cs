using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace PTC
{
  public class ProductSearch
  {

    [Required(ErrorMessage ="Please enter product name. (Accepts partial entries)")]
    public string ProductName { get; set; }
    public int CategoryId { get; set; }
  }
}