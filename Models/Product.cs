namespace PTC.Models
{
    using Newtonsoft.Json;
    using Newtonsoft.Json.Converters;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Product")]
    public partial class Product
    {
        [Timestamp]
        public byte[] Timestamp { get; set; }

        public int ProductId { get; set; }

        [StringLength(80)]
        public string ProductName { get; set; }


        [JsonProperty]
        [JsonConverter(typeof(ShortDateConverter))]
        // 05/30/2021 11:55 am - SSN - [20210530-1151] - [001] - MVC concurrency

        [DisplayFormat(ApplyFormatInEditMode =true,DataFormatString ="{0:MM/dd/yyyy}")]
        public DateTime IntroductionDate { get; set; }

        [Column(TypeName = "money")]
        public decimal? Price { get; set; }

        [StringLength(255)]
        public string Url { get; set; }


        [Required(ErrorMessage = "Category selection is required.")]
        public int CategoryId { get; set; }

        public virtual Category Category { get; set; }
    }

    public class ShortDateConverter : DateTimeConverterBase
    {
        public override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer)
        {
            return DateTime.Parse(reader.Value.ToString());
        }

        public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)
        {
           // writer.WriteValue(((DateTime)value).ToString(CurrentCulture.DateTimeFormat.ShortDatePattern));
            string result =  ((DateTime)value).ToString("yyyy-MM-dd");
            writer.WriteValue(result);
        }
    }
}
