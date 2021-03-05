using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using System.Numerics;


[ApiController]
[Route("songs")]
public class SongController : ControllerBase
{
    private readonly IRepository<MoQuotePlusSong> _songRepository;

    public SongController(IRepository<MoQuotePlusSong> songRepository)
    {
        _songRepository = songRepository;
    }

    [HttpGet("{slc}")]
    public async Task<IActionResult> Get(int slc)
    {
        try
        {
            var song = await _songRepository.Get(slc);
            return Ok(song);
        }
        catch (Exception)
        {
            //handle exception
            return NotFound();
        }
    }


    [HttpPost]
    public async Task<IActionResult> Insert([FromBody] MoQuotePlusSong song)
    {
        try
        {
            Console.WriteLine(ModelState.IsValid);
            var insertSong = await _songRepository.Insert(song);
            return Ok(insertSong);

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
    //[HttpPut("{id}")]
    // public async Task<IActionResult> Update(long id, [FromBody] Book book)
    // {
    //     try
    //     {
    //         var editBook = await _bookRepository.Update(new Book { Id = id, Title = book.Title, Author = book.Author });
    //         return Ok(editBook);
    //     }
    //     catch (Exception error)
    //     {
    //         Console.WriteLine(error.Message);
    //         Console.WriteLine(error.StackTrace);
    //         //handle exception
    //         return NotFound("no book updated");
    //     }
    // }
}
