using System.Collections.Generic;
using Microsoft.Extensions.Configuration;
using Dapper;
using System.Threading.Tasks;
using System.Numerics;


public class SongRepository : BaseRepository, IRepository<Song>
{

    public SongRepository(IConfiguration configuration) : base(configuration) { }

    public async Task<Song> Get(int slc)
    {
        using var connection = CreateConnection();
        return await connection.QuerySingleAsync<Song>("SELECT * FROM Songs WHERE SongLengthCode = @Slc ORDER BY RANDOM() LIMIT 1; SELECT * FROM MoQuotes ORDER BY RANDOM() LIMIT 1;", new { Slc = slc });
        //will return ONE song in a given song code bucket (SLC) and ALSO a random Quote 
    }

    //convert squats into time 
    // pick energy level (easy, medium , hard) 
    // Eg: 50 squats = 100 secs - 
        // How do we randomise the song choice 
            //  Create code for time buckets (1 = 0-60 secs)(2 =61-90 )(3 =91-120 )(4 =121-150 )(5=151-180)(6=181-210)(7=211-240)(8=241-270)
            //  Select Code Plus Random 

    public async Task<Song> Insert(Song song)
    // (string Title, string Artist, int SongLengthCode, string Link, string SuggestedBy)
    {
        using var connection = CreateConnection();
        return await connection.QuerySingleAsync<Song>("INSERT INTO Songs (Title, Artist, SongLengthCode, Link, SuggestedBy) VALUES (@Title, @Artist, @SongLengthCode, @Link, @SuggestedBy);", song);
    }


    // public async Task<Book> Update(Book book)
    // {
    //     using var connection = CreateConnection();
    //     return await connection.QuerySingleAsync<Book>("UPDATE Books SET Title = @Title, Author = @Author WHERE Id = @Id RETURNING *", book);
    // }

}

