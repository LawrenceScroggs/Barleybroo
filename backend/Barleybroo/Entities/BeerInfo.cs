using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Barleybroo.Entities
{
    public class BeerInfo
    {
        public BeerInfo()
        {
            Reviews = new List<Reviews>();
        }
        [Key]
        [MaxLength(128)]
        public string Id { get; set; }
        [MaxLength(128)]
        public string BeerName { get; set; }
        public int Score { get; set; }
        public virtual ICollection<Reviews> Reviews { get; set; }
    }
}