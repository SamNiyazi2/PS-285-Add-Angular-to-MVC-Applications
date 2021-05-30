using System;
using System.Collections.Generic;
using System.Data.Entity.Infrastructure;
using System.Data.Entity.Validation;

namespace PTC.Models
{
    public partial class PTCData
    {
        protected override DbEntityValidationResult ValidateEntity(
               DbEntityEntry entityEntry,
               IDictionary<object, object> items)
        {
            List<DbValidationError> list =
               new List<DbValidationError>();

            if (entityEntry.Entity is Product)
            {
                Product entity = entityEntry.Entity as Product;

                list = ValidateProduct(entity);

                //if (list.Count > 0)
                //{
                //    return new DbEntityValidationResult(entityEntry, list);
                //}
            }

            DbEntityValidationResult results = base.ValidateEntity(entityEntry, items);

            foreach (DbValidationError error in list)
            {
                results.ValidationErrors.Add(error);

            }
            return results;

        }


        protected List<DbValidationError> ValidateProduct(
                                     Product entity)
        {
            List<DbValidationError> list =
            new List<DbValidationError>();

            // 05/29/2021 11:48 am - SSN - [20210528-1458] - [016] - Angular validations - New product
            // Add try/catch
            try
            {

                // Check ProductName field
                if (string.IsNullOrEmpty(entity.ProductName))
                {
                    list.Add(new DbValidationError("ProductName",
                        "Product Name must be filled in."));
                }
                else
                {
                    if (entity.ProductName.ToLower() ==
                        entity.ProductName)
                    {
                        list.Add(new DbValidationError("ProductName",
                          "Product Name must not be all lower case."));
                    }
                    if (entity.ProductName.Length < 4 ||
                        entity.ProductName.Length > 150)
                    {
                        list.Add(new DbValidationError("ProductName",
                          "Product Name must have between 4 and 150 characters."));
                    }
                }

                // 05/28/2021 02:58 pm - SSN - [20210528-1458] - [001] - Angular validations - New product 
                // 05/29/2021 11:35 am - SSN - [20210528-1458] - [013] - Angular validations - New product
                // if (entity.Category.CategoryId <= 0)
                if (entity.CategoryId <= 0)
                {
                    // 05/29/2021 01:36 pm - SSN - [20210528-1458] - [017] - Angular validations - New product
                    // list.Add(new DbValidationError("Category",
                    list.Add(new DbValidationError("CategoryId",
                      "Category is required."));

                }


                // Check IntroductionDate field
                if (entity.IntroductionDate < DateTime.Now.AddYears(-5))
                {
                    list.Add(new DbValidationError("IntroductionDate",
                      "Introduction date must be within the last five years."));
                }

                // Check Price field
                if (entity.Price < Convert.ToDecimal(0.1) ||
                    entity.Price > Convert.ToDecimal(9999.99) ||
                    // 05/29/2021 01:45 pm - SSN - [20210528-1458] - [018] - Angular validations - New product
                    !entity.Price.HasValue)
                {
                    list.Add(new DbValidationError("Price",
                      "Price must be between $0.1 and less than $9, 999.99."));
                }

                // Check Url field
                if (string.IsNullOrEmpty(entity.Url))
                {
                    list.Add(new DbValidationError("Url",
                        "Url must be filled in."));
                }
                else
                {
                    if (entity.Url.Length < 5 ||
                        entity.Url.Length > 255)
                    {
                        list.Add(new DbValidationError("Url",
                          "Url must have between 5 and 255 characters."));
                    }
                }
            }
            catch (Exception ex)
            {
                list.Add(new DbValidationError("",$"[ssn-20210529-1153] [{ex.Message}"));
            }

            return list;
        }
    }
}