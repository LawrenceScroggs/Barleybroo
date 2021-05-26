using System;
using System.ComponentModel.DataAnnotations;
using Barleybroo.Entities;

namespace Barleybroo.Models
{
    public class CreateReviewBindingModel
    {
        [Required]
        [MaxLength(128, ErrorMessage = "Maximun Beer Id is 128.")]
        public string beer_id { get; set; }
        [Required]
        [MaxLength(128, ErrorMessage = "Maximun Beer Name is 128.")]
        public string beer_name { get; set; }
        [Required]
        public string content { get; set; }
    }
    public class UpdateReviewBindingModel
    {
        [Required]
        public string review_id { get; set; }
        [Required]
        public string content { get; set; }
    }
}