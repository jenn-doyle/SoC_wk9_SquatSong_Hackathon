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

    [HttpGet]
    public IEnumerable<Song> GetAll()
    {
        return _songRepository.GetAll();
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
    public async Task<IActionResult> Insert([FromBody] Song song)
    {
        try
        {
            Console.WriteLine(ModelState.IsValid);
            var insertSong = await _songRepository.Insert(new Song { Title = song.Title, Artist = song.Artist, SongLengthCode = song.SongLengthCode, Link = song.Link, SuggestedBy = song.SuggestedBy });
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
    [HttpPut("{id}")]
    public async Task<IActionResult> Update(long id, [FromBody] Song song)
    {
        try
        {
            var editSong = await _songRepository.Update(new Song { Id = id, Title = song.Title, Artist = song.Artist, SongLengthCode = song.SongLengthCode, Link = song.Link, SuggestedBy = song.SuggestedBy });
            return Ok(editSong);
        }
        catch (Exception error)
        {
            Console.WriteLine(error.Message);
            Console.WriteLine(error.StackTrace);
            //handle exception
            return NotFound("no song updated");
        }
    }
}