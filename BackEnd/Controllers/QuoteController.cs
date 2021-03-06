using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using System.Numerics;


[ApiController]
[Route("quotes")]
public class QuoteController : ControllerBase
{
    private readonly IRepository<MoQuote> _quoteRepository;

    public QuoteController(IRepository<MoQuote> quoteRepository)
    {
        _quoteRepository = quoteRepository;
    }

    [HttpGet]
    public IEnumerable<MoQuote> GetAll()
    {
        return _quoteRepository.GetAll();
    }

    [HttpGet("{rand}")]
    public async Task<IActionResult> Get(int rand)
    {
        try
        {
            var quote = await _quoteRepository.Get(rand);
            return Ok(quote);
        }
        catch (Exception)
        {
            //handle exception
            return NotFound();
        }
    }

    [HttpPost]
    public async Task<IActionResult> Insert([FromBody] MoQuote quote)
    {
        try
        {
            Console.WriteLine(ModelState.IsValid);
            var insertQuote = await _quoteRepository.Insert(new MoQuote { Quote = quote.Quote });
            return Ok(insertQuote);

        }
        catch (Exception error)
        {
            Console.WriteLine(error.Message);
            Console.WriteLine(error.StackTrace);
            //handle exception
            return BadRequest();
        }
    }

    //POTENTIAL STRETCH GOAL
    [HttpPut("{id}")]
    public async Task<IActionResult> Update(long id, [FromBody] MoQuote quote)
    {
        try
        {
            var editQuote = await _quoteRepository.Update(new MoQuote { Quote = quote.Quote });
            return Ok(editQuote);
        }
        catch (Exception error)
        {
            Console.WriteLine(error.Message);
            Console.WriteLine(error.StackTrace);
            //handle exception
            return NotFound("no quote updated");
        }
    }
}