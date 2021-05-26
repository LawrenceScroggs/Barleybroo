using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;
using Barleybroo.Models;

namespace Barleybroo.Entities
{
    public class Reviews
    {
        public Reviews()
        {
        }
        [Key]
        [MaxLength(128)]
        public string Id { get; set; }
        public string ReviewContent { get; set; }
        public DateTime AddDate { get; set; }
        public DateTime LastUpdate { get; set; }
        //Foreignkey
        public string UserId { get; set; }
        [ForeignKey("UserId")]
        public virtual ApplicationUser ApplicationUsers { get; set; }
        public string BeerId { get; set; }
        [ForeignKey("BeerId")]
        public virtual BeerInfo BeerInfos { get; set; }
    }
}