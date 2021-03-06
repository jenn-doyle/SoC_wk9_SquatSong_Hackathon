using System.Collections.Generic;
using Microsoft.Extensions.Configuration;
using Dapper;
using System.Threading.Tasks;
using System.Numerics;


public class QuoteRepository : BaseRepository, IRepository<MoQuote>
{

    public QuoteRepository(IConfiguration configuration) : base(configuration) { }

    public IEnumerable<MoQuote> GetAll()
    {
        using var connection = CreateConnection();
        IEnumerable<MoQuote> quotes = connection.Query<MoQuote>("SELECT * FROM MoQuotes;");
        return quotes;
    }

    public async Task<MoQuote> Get(int rand)
    {
        using var connection = CreateConnection();
        return await connection.QuerySingleAsync<MoQuote>("SELECT * FROM MoQuotes ORDER BY RANDOM() LIMIT 1;");

    }
    public async Task<MoQuote> Insert(MoQuote quote)
    // (string Title, string Artist, int SongLengthCode, string Link, string SuggestedBy)
    {
        using var connection = CreateConnection();
        return await connection.QuerySingleAsync<MoQuote>("INSERT INTO MoQuotes (Quote) VALUES (@Quote); SELECT * FROM Songs LIMIT 1", quote);
    }

    public async Task<MoQuote> Update(MoQuote quote)
    {
        using var connection = CreateConnection();
        return await connection.QuerySingleAsync<MoQuote>("UPDATE MoQuotes SET Quote = @Quote;", quote);
    }
}
