using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using System.Numerics;


[ApiController]
[Route("songs")]
public class SongController : ControllerBase
{
    private readonly IRepository<Song> _songRepository;

    public SongController(IRepository<Song> songRepository)
    {
        _songRepository = songRepository;
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> Get(long id)
    {
        try
        {
            var song = await _songRepository.Get(id);
            return Ok(song);
        }
        catch (Exception)
        {
            //handle exception
            return NotFound($"no song with id {id}");
        }
    }


    [HttpPost]
    public async Task<IActionResult> Insert([FromBody] Song song)
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
            return BadRequest("Your song is longer than 6 characters dumbass");
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
