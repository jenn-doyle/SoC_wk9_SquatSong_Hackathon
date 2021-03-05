using System.Collections.Generic;
using Microsoft.Extensions.Configuration;
using Dapper;
using System.Threading.Tasks;
using System.Numerics;


public class SongRepository : BaseRepository, IRepository<Song>
{

    public SongRepository(IConfiguration configuration) : base(configuration) { }

    public async Task<Song> Get(long id)
    {
        using var connection = CreateConnection();
        return await connection.QuerySingleAsync<Song>("SELECT * FROM Songs WHERE Id = @Id;", new { Id = id });
    }

    public async Task<Song> Insert(Song song)
    {
        using var connection = CreateConnection();
        return await connection.QuerySingleAsync<Song>("INSERT INTO Songs (Title, Author) VALUES (@Title, @Author) RETURNING *;", song);
    }


    // public async Task<Book> Update(Book book)
    // {
    //     using var connection = CreateConnection();
    //     return await connection.QuerySingleAsync<Book>("UPDATE Books SET Title = @Title, Author = @Author WHERE Id = @Id RETURNING *", book);
    // }

}

