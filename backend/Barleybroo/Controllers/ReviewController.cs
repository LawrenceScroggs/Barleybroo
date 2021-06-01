using System;
using System.Threading.Tasks;
using System.Web.Http;
using Barleybroo.Infrastructure;
using Barleybroo.Models;
using Barleybroo.Entities;
using Microsoft.AspNet.Identity;
using System.Linq;

namespace Barleybroo.Controllers
{
    [Authorize]
    [RoutePrefix("Review")]
    public class ReviewController : BaseApiController
    {
        private ReviewsRepository _repoReview;
        private BeerInfoRepository _repoBeer;
        public ReviewController()
        {
            _repoReview = new ReviewsRepository();
            _repoBeer = new BeerInfoRepository();
        }
        [Route("List")]
        public IHttpActionResult GetAllReviews()
        {
            var retVal = ReviewDataMapping.Create(_repoReview.GetAllReview().ToList());
            return Ok(retVal);
        }
        [Route("Details")]
        public IHttpActionResult GetAReview(string id)
        {
            if (string.IsNullOrEmpty(id))
            {
                ModelState.AddModelError("", "Invalid review id.");
                return BadRequest(ModelState);
            }
            var review = _repoReview.FindReviewById(id);
            if(review == null)
            {
                ModelState.AddModelError("", "The review doesn't exist.");
                return BadRequest(ModelState);
            }
            var retVal = new ReviewReturnModel
            {
                review_id = review.Id,
                content = review.ReviewContent,
                beer_name = review.BeerInfos.BeerName,
                user_email = review.ApplicationUsers.Email,
                user_score = review.ApplicationUsers.Score,
                first_add = review.AddDate,
                last_update = review.LastUpdate
            };
            return Ok(retVal);
        }
        [Route("Create")]
        public async Task<IHttpActionResult> CreateReview(CreateReviewBindingModel reviewModel)
        {
            var user = User.Identity.GetUserId();
            if(user == null)
            {
                ModelState.AddModelError("", "Invalid user.");
                return BadRequest(ModelState);
            }
            //Check if beer id exists 
            var beer = _repoBeer.FindBeerInfoById(reviewModel.beer_id);
            var beerScore = 0;
            if (beer == null)
            {
                var beerRecord = new BeerInfo
                {
                    Id = reviewModel.beer_id,
                    BeerName = reviewModel.beer_name,
                    Score = 20 //add enum or db?
                };
                var beerResult = await _repoBeer.AddBeerInfoAsync(beerRecord);
                if (beerResult == null)
                {
                    ModelState.AddModelError("", "Unknown error occured when adding review.");
                    return BadRequest(ModelState);
                }
                beerScore = beerRecord.Score;
            }
            else
            {
                beerScore = beer.Score;
            }
            var review = new Reviews
            {
                Id = Guid.NewGuid().ToString(),
                ReviewContent = reviewModel.content,
                BeerId = reviewModel.beer_id,
                Rating = reviewModel.rating,
                UserId = user,
                AddDate = DateTime.UtcNow,
                LastUpdate = DateTime.UtcNow
            };
            var result = await _repoReview.CreateReviewAsync(review);
            if(result == null)
            {
                ModelState.AddModelError("", "Unknown error occured when adding review.");
                return BadRequest(ModelState);
            }
            var userRecord = await AppUserManager.FindByIdAsync(user);
            userRecord.Score += beerScore;
            IdentityResult updateUserResult = await AppUserManager.UpdateAsync(userRecord);
            if (!updateUserResult.Succeeded) return GetErrorResult(updateUserResult);
            return Ok();
        }
        [Route("Update")]
        public async Task<IHttpActionResult> PutReview(UpdateReviewBindingModel updateReview)
        {
            var review = _repoReview.FindReviewById(updateReview.review_id);
            if(review == null)
            {
                ModelState.AddModelError("", "Invalid review id.");
                return BadRequest(ModelState);
            }
            var user = User.Identity.GetUserId();
            if(user != review.UserId)
            {
                ModelState.AddModelError("", "Permission denied.");
                return BadRequest(ModelState);
            }
            review.ReviewContent = updateReview.content;
            review.LastUpdate = DateTime.UtcNow;
            var result = await _repoReview.UpdateReviewAsync(review);
            if(!result)
            {
                ModelState.AddModelError("", "Unknown error occured when adding review.");
                return BadRequest(ModelState);
            }
            return Ok();
        }
    }
}
