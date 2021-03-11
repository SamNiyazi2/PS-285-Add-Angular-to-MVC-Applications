using PTC.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Data.Entity.Validation;
using System.Linq;
using System.Reflection;
using System.Text.RegularExpressions;
using System.Web.Mvc;

namespace PTC
{
    public class PTCViewModel
    {
        #region Constructor
        public PTCViewModel()
        {
            Init();
        }
        #endregion

        #region Public Properties
        public List<Product> Products { get; set; }
        public List<Category> Categories { get; set; }
        public ProductSearch SearchEntity { get; set; }
        public List<Category> SearchCategories { get; set; }
        public Product Entity { get; set; }

        public string EventAction { get; set; }
        public string EventArgument { get; set; }
        public bool IsValid { get; set; }
        public PDSAPageModeEnum PageMode { get; set; }
        public bool IsDetailAreaVisible { get; set; }
        public bool IsListAreaVisible { get; set; }
        public bool IsSearchAreaVisible { get; set; }
        public ModelStateDictionary Messages { get; set; }
        public Exception LastException { get; set; }
        public string Message { get; set; }
        #endregion

        #region Init Method
        public void Init()
        {
            Products = new List<Product>();
            Categories = new List<Category>();
            Entity = new Product();

            SearchEntity = new ProductSearch();
            SearchCategories = new List<Category>();

            EventAction = string.Empty;
            EventArgument = string.Empty;
            IsValid = true;
            IsDetailAreaVisible = false;
            IsListAreaVisible = true;
            IsSearchAreaVisible = true;
            PageMode = PDSAPageModeEnum.List;
            Messages = new ModelStateDictionary();
        }
        #endregion

        #region ResetException Method
        private void ResetException()
        {
            LastException = null;
            Message = string.Empty;
        }
        #endregion

        #region HandleRequest Method
        public void HandleRequest()
        {
            LoadSearchCategories();
            LoadCategories(ENUM_LOAD_CATEGORY_FOR.NA);

            switch (EventAction.ToLower())
            {
                case "":
                case "list":
                    Get();
                    break;

                case "search":
                    Search();
                    break;

                case "resetsearch":
                    ResetSearch();
                    break;

                case "cancel":
                    Get();
                    break;

                case "add":
                    AddMode();
                    break;

                case "edit":
                    EditMode(Convert.ToInt32(EventArgument));
                    break;

                case "save":
                    Save();
                    break;

                case "delete":
                    Delete(Convert.ToInt32(EventArgument));
                    break;

                default:
                    break;
            }
        }
        #endregion

        #region LoadCategories Method

        public enum ENUM_LOAD_CATEGORY_FOR
        {
            NA,
            Input,
            Search

        }

        public void LoadCategories(ENUM_LOAD_CATEGORY_FOR option)
        {
            PTCData db = null;

            ResetException();
            try
            {
                db = new PTCData();

                // Load categories
                Categories.Clear();
                Categories.AddRange(db.Categories);


                Category entity = new Category();

                switch (option)
                {
                    case ENUM_LOAD_CATEGORY_FOR.Input:
                        entity.CategoryId = 0;
                        entity.CategoryName = "Make a selection";
                        break;

                    case ENUM_LOAD_CATEGORY_FOR.Search:
                        entity.CategoryId = 0;
                        entity.CategoryName = "Search All Categories";
                        break;

                }
                if (option != ENUM_LOAD_CATEGORY_FOR.NA)
                {
                    Categories.Insert(0, entity);
                }



            }
            catch (Exception ex)
            {
                LastException = ex;
                Message = "ERROR Loading Categories";
            }
        }
        #endregion

        #region LoadSearchCategories Method
        public void LoadSearchCategories()
        {
            // Get all categories from database
            LoadCategories(ENUM_LOAD_CATEGORY_FOR.NA);

            if (Categories.Count > 0)
            {
                // Load search categories
                SearchCategories.Clear();
                SearchCategories.AddRange(Categories);

                // Add category for 'Search All'
                Category entity = new Category();
                entity.CategoryId = 0;
                entity.CategoryName = "-- Search All Categories --";

                // Insert "Search" at the top
                SearchCategories.Insert(0, entity);
            }
        }
        #endregion

        #region Get Methods
        public void Get()
        {
            PTCData db = null;

            ResetException();
            try
            {
                db = new PTCData();

                Products = db.Products.OrderBy(p => p.ProductName).ToList();

                SetUIState(PDSAPageModeEnum.List);
            }
            catch (Exception ex)
            {
                LastException = ex;
                Message = "ERROR Loading Products";
            }
        }

        public Product Get(int productId)
        {
            PTCData db = null;

            ResetException();
            try
            {
                db = new PTCData();

                Entity = db.Products.Find(productId);
            }
            catch (Exception ex)
            {
                LastException = ex;
                Message = "ERROR Getting Product with ID: " + productId.ToString();
            }

            return Entity;
        }
        #endregion

        #region Search Method
        public void Search()
        {
            PTCData db = null;

            ResetException();
            try
            {
                db = new PTCData();

                // Perform Search
                Products = db.Products.Where(p =>
                    (SearchEntity.CategoryId == 0 ? true :
                         p.Category.CategoryId == SearchEntity.CategoryId) &&
                    (string.IsNullOrEmpty(SearchEntity.ProductName) ? true :
                         p.ProductName.ToLower().Contains(SearchEntity.ProductName))).
                    OrderBy(p => p.ProductName).ToList();

                SetUIState(PDSAPageModeEnum.List);
            }
            catch (Exception ex)
            {
                LastException = ex;
                Message = "ERROR Searching for Products";
            }
        }
        #endregion

        #region ResetSearch Method
        public void ResetSearch()
        {
            SearchEntity = new ProductSearch();

            Get();
        }
        #endregion

        #region AddMode Method
        public void AddMode()
        {
            // Initialize Entity Object
            Entity = new Product();
            Entity.IntroductionDate = DateTime.Now;
            Entity.Url = string.Empty;
            Entity.Price = 0;

            SetUIState(PDSAPageModeEnum.Add);
        }
        #endregion

        #region EditMode Method
        public void EditMode(int productId)
        {
            // Get Product Data
            Entity = Get(productId);

            SetUIState(PDSAPageModeEnum.Edit);
        }
        #endregion

        #region SetUIState Method
        protected void SetUIState(PDSAPageModeEnum state)
        {
            PageMode = state;

            IsDetailAreaVisible = (PageMode == PDSAPageModeEnum.Add || PageMode == PDSAPageModeEnum.Edit);
            IsListAreaVisible = (PageMode == PDSAPageModeEnum.List);
            IsSearchAreaVisible = (PageMode == PDSAPageModeEnum.List);
        }
        #endregion

        #region Save Method
        public void Save()
        {
            PTCData db = null;

            Messages.Clear();
            ResetException();
            try
            {
                db = new PTCData();

                // Ensure the correct category is set
                // 03/10/2021 06:57 pm - SSN - Added nullify 0 categoryID && Entity.Category != null
                //if (Entity.CategoryId == 0)
                //{
                //    Entity.CategoryId = -1;
                //}

                ////////////if ((Entity.CategoryId == null || Entity.CategoryId == 0) && Entity.Category != null)
                ////////////{
                ////////////    Entity.Category = db.Categories.Find(Entity.Category.CategoryId);
                ////////////}
                ////////////else
                ////////////{
                Entity.Category = db.Categories.Find(Entity.CategoryId);
                ////////////}


                // Either Update or Insert product
                if (PageMode == PDSAPageModeEnum.Edit)
                {
                    db.Entry(Entity).State = EntityState.Modified;
                    db.SaveChanges();
                }
                else if (PageMode == PDSAPageModeEnum.Add)
                {
                    db.Products.Add(Entity);
                    db.SaveChanges();
                }

                // Get all the data again in case anything changed
                Get();
            }
            catch (DbEntityValidationException ex)
            {
                IsValid = false;
                // Validation errors
                foreach (var errors in ex.EntityValidationErrors)
                {
                    foreach (var item in errors.ValidationErrors)
                    {
                        Messages.AddModelError(item.PropertyName, item.ErrorMessage);
                    }
                }

                // Set page state
                SetUIState(PageMode);
            }
            catch (DbUpdateConcurrencyException ex)
            {
                IsValid = false;

                var databaseEntry = db.Entry(Entity).GetDatabaseValues();


//                var entry1 = ex.Entries.Single();

//                var clientValues1 = (Product)entry.Entity;

                if (databaseEntry == null)
                {
                    Messages.AddModelError(string.Empty,
                        "Unable to save changes. The department was deleted by another user.");
                }
                else
                {
                    //                  var databaseValues = (Product)databaseEntry.ToObject();
                    IEnumerable<String> fieldsList = databaseEntry.PropertyNames;
                    

                    DbEntityEntry entry111 = ex.Entries.FirstOrDefault();

                    Regex regex = new Regex("byte");

                    foreach (string fieldName in fieldsList)
                    {
                        string typeName = entry111.CurrentValues[fieldName].GetType().Name.ToLower();

                        if (regex.Match(typeName).Length>0) continue;

                        var temp1 = databaseEntry[fieldName];
                        var temp2 = entry111.CurrentValues[fieldName];


                        if (!temp1.Equals(temp2) )
                        {
                            Messages.AddModelError(fieldName, "Current value: " + $"<br/>[{temp1}<br/>{temp2}");

                        }

                        Messages.AddModelError("", "Record was changed by someone else.  Please pick the values you choose to override.");

                    }


                    SetUIState(PageMode);

                }

            }

            catch (Exception ex)
            {
                LastException = ex;
                Message = "ERROR Saving Product";
            }
        }
        #endregion

        #region Delete Method
        public void Delete(int productId)
        {
            PTCData db = null;

            ResetException();
            try
            {
                db = new PTCData();

                Product product = db.Products.Find(productId);

                // Attempt to delete
                db.Products.Remove(product);
                db.SaveChanges();

                // Reload all Products
                Get();
            }
            catch (Exception ex)
            {
                LastException = ex;
                Message = "ERROR Deleting Product with ID: " + productId.ToString();
            }
        }
        #endregion
    }
}
