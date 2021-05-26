using System;
using System.Collections.Generic;
using System.Linq;
using Barleybroo.Entities;

namespace Barleybroo.Models
{
    public class ReviewDataMapping
    {
        public static List<ReviewReturnModel> Create(List<Reviews> reviews)
        {
            return
                reviews
                .Select(d => new ReviewReturnModel
                {
                    review_id = d.Id,
                    content = d.ReviewContent,
                    beer_name = d.BeerInfos.BeerName,
                    user_email = d.ApplicationUsers.Email,
                    user_score = d.ApplicationUsers.Score,
                    first_add = d.AddDate,
                    last_update = d.LastUpdate
                })
                .ToList();
        }
    }
    public class ReviewReturnModel
    {
        public string review_id { get; set; }
        public string content { get; set; }
        public string beer_name { get; set; }
        public string user_email { get; set; }
        public int user_score { get; set; }
        public DateTime first_add { get; set; }
        public DateTime last_update { get; set; }
    }
}