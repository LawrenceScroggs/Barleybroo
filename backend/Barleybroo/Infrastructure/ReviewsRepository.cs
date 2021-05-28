using Barleybroo.Models;
using Barleybroo.Entities;
using System;
using System.Threading.Tasks;
using System.Linq;

namespace Barleybroo.Infrastructure
{
    public class ReviewsRepository : IDisposable
    {
        private ApplicationDbContext _dbContext;
        public ReviewsRepository()
        {
            _dbContext = new ApplicationDbContext();
        }
        public IQueryable<Reviews> GetAllReview()
        {
            return _dbContext.Reviews;
        }
        public Reviews FindReviewById(string id)
        {
            return _dbContext.Reviews.FirstOrDefault(d => d.Id == id);
        }
        public async Task<Reviews> CreateReviewAsync(Reviews review)
        {
            _dbContext.Reviews.Add(review);
            return await _dbContext.SaveChangesAsync() == 0 ? null : review;
        }
        public async Task<bool> UpdateReviewAsync(Reviews review)
        {
            _dbContext.Configuration.ValidateOnSaveEnabled = false;
            var entityEntry = _dbContext.Entry(review);
            _dbContext.Reviews.Attach(review);
            entityEntry.Property("ReviewContent").IsModified = true;
            entityEntry.Property("LastUpdate").IsModified = true;
            return await _dbContext.SaveChangesAsync() > 0;
        }
        public void Dispose()
        {
            _dbContext.Dispose();
        }
    }
}