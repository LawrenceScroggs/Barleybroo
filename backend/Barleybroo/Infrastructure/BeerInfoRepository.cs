using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Barleybroo.Entities;
using Barleybroo.Models;
using System.Threading.Tasks;

namespace Barleybroo.Infrastructure
{
    public class BeerInfoRepository
    {
        private ApplicationDbContext _dbContext;
        public BeerInfoRepository()
        {
            _dbContext = new ApplicationDbContext();
        }
        public BeerInfo FindBeerInfoById(string id)
        {
            return _dbContext.BeerInfo.AsNoTracking().FirstOrDefault(d=>d.Id==id);
        }
        public async Task<BeerInfo> AddBeerInfoAsync(BeerInfo beer)
        {
            _dbContext.BeerInfo.Add(beer);
            return await _dbContext.SaveChangesAsync() == 0 ? null : beer;
        }

    }
}